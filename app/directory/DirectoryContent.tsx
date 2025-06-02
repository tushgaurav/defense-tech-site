"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search, Filter, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Page } from "@/components/common/Page"

// Define types for our directory data
type MemberRole =
    | "Investor"
    | "Advisor"
    | "Founder"
    | "Want to be a founder"
    | "Operator"
    | "Influencer"
type ExpertiseArea =
    | "AI, Cyber, and OSINT"
    | "Defense & Strategic Technologies"
    | "Software, SaaS & Product"
    | "Space & Advanced Hardware"
    | "Autonomous Systems & Robotics"
    | "Healthcare, Manufacturing & Energy"
    | "Narrative & Public Relations"

interface Member {
    name: string
    role: MemberRole
    description: string
    expertiseAreas: ExpertiseArea[]
}

interface DirectoryContentProps {
    initialMembers: Member[]
    totalCount: number
}

const ITEMS_PER_PAGE = 12

export default function DirectoryContent({ initialMembers, totalCount }: DirectoryContentProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [roleFilter, setRoleFilter] = useState<string | null>(null)
    const [expertiseFilter, setExpertiseFilter] = useState<string | null>(null)
    const [currentPage, setCurrentPage] = useState(1)

    // Get unique roles and expertise areas for filters
    const uniqueRoles = Array.from(new Set(initialMembers.map((member) => member.role)))
    const uniqueExpertiseAreas = Array.from(new Set(initialMembers.flatMap((member) => member.expertiseAreas)))

    // Filter members based on search query and filters
    const filteredMembers = useMemo(() => {
        return initialMembers.filter((member) => {
            // Search filter
            const matchesSearch =
                searchQuery === "" ||
                member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                member.description.toLowerCase().includes(searchQuery.toLowerCase())

            // Role filter
            const matchesRole = roleFilter === null || member.role === roleFilter

            // Expertise filter
            const matchesExpertise =
                expertiseFilter === null || member.expertiseAreas.includes(expertiseFilter as ExpertiseArea)

            return matchesSearch && matchesRole && matchesExpertise
        })
    }, [searchQuery, roleFilter, expertiseFilter, initialMembers])

    // Pagination
    const totalPages = Math.ceil(filteredMembers.length / ITEMS_PER_PAGE)
    const paginatedMembers = filteredMembers.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    )

    return (
        <Page>
            <main className="flex-1 py-6 md:py-10 relative">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] pointer-events-none"></div>
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="flex items-center mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center mr-4 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            <ArrowLeft className="mr-1 h-4 w-4" />
                            Back to Home
                        </Link>
                        <h1 className="text-2xl md:text-3xl font-bold">Defense Tech Community Directory</h1>
                    </div>

                    <div className="bg-card/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-border/40 shadow-sm mb-8">
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="relative">
                                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search by name or description..."
                                    className="pl-9 bg-background/50"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <Select value={roleFilter || "all"} onValueChange={(value) => setRoleFilter(value)}>
                                <SelectTrigger className="bg-background/50">
                                    <SelectValue placeholder="Filter by role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Roles</SelectItem>
                                    {uniqueRoles.map((role) => (
                                        <SelectItem key={role} value={role}>
                                            {role}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select value={expertiseFilter || "all"} onValueChange={(value) => setExpertiseFilter(value)}>
                                <SelectTrigger className="bg-background/50">
                                    <SelectValue placeholder="Filter by expertise" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Expertise Areas</SelectItem>
                                    {uniqueExpertiseAreas.map((area) => (
                                        <SelectItem key={area} value={area}>
                                            {area}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Active filters */}
                        {(roleFilter || expertiseFilter || searchQuery) && (
                            <div className="flex flex-wrap gap-2 mt-4">
                                {searchQuery && (
                                    <Badge variant="outline" className="flex items-center gap-1 bg-background/50">
                                        Search: {searchQuery}
                                        <button
                                            onClick={() => setSearchQuery("")}
                                            className="ml-1 h-4 w-4 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-muted/80"
                                        >
                                            <span className="sr-only">Remove</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10"
                                                height="10"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M18 6 6 18" />
                                                <path d="m6 6 12 12" />
                                            </svg>
                                        </button>
                                    </Badge>
                                )}
                                {roleFilter && (
                                    <Badge variant="outline" className="flex items-center gap-1 bg-background/50">
                                        Role: {roleFilter}
                                        <button
                                            onClick={() => setRoleFilter(null)}
                                            className="ml-1 h-4 w-4 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-muted/80"
                                        >
                                            <span className="sr-only">Remove</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10"
                                                height="10"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M18 6 6 18" />
                                                <path d="m6 6 12 12" />
                                            </svg>
                                        </button>
                                    </Badge>
                                )}
                                {expertiseFilter && (
                                    <Badge variant="outline" className="flex items-center gap-1 bg-background/50">
                                        Expertise: {expertiseFilter}
                                        <button
                                            onClick={() => setExpertiseFilter(null)}
                                            className="ml-1 h-4 w-4 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-muted/80"
                                        >
                                            <span className="sr-only">Remove</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10"
                                                height="10"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M18 6 6 18" />
                                                <path d="m6 6 12 12" />
                                            </svg>
                                        </button>
                                    </Badge>
                                )}
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => {
                                        setSearchQuery("")
                                        setRoleFilter(null)
                                        setExpertiseFilter(null)
                                    }}
                                    className="text-xs hover:text-primary"
                                >
                                    Clear all filters
                                </Button>
                            </div>
                        )}
                    </div>

                    <div className="mb-4">
                        <p className="text-muted-foreground">
                            Showing {filteredMembers.length} of {totalCount} members
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {paginatedMembers.map((member, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden hover:shadow-md transition-shadow bg-card/50 backdrop-blur-sm border-border/40"
                            >
                                <CardContent className="p-6">
                                    <div className="flex flex-col h-full">
                                        <div className="mb-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-lg font-bold">{member.name}</h3>
                                                <Badge variant="outline" className="font-normal bg-background/50">
                                                    {member.role}
                                                </Badge>
                                            </div>
                                            <p className="text-muted-foreground text-sm">{member.description}</p>
                                        </div>
                                        <div className="mt-auto">
                                            <div className="flex flex-wrap gap-2">
                                                {member.expertiseAreas.map((area, idx) => (
                                                    <Badge
                                                        key={idx}
                                                        variant="secondary"
                                                        className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                                                    >
                                                        {area}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center gap-2 mt-8">
                            <Button
                                variant="outline"
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </Button>
                            <div className="flex items-center gap-2">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <Button
                                        key={page}
                                        variant={currentPage === page ? "default" : "outline"}
                                        onClick={() => setCurrentPage(page)}
                                        className="w-10 h-10"
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </div>
                            <Button
                                variant="outline"
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </Button>
                        </div>
                    )}

                    {filteredMembers.length === 0 && (
                        <div className="text-center py-12 bg-card/50 backdrop-blur-sm rounded-lg border border-border/40 shadow-sm">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background mb-4">
                                <Filter className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <h3 className="text-lg font-medium mb-2">No results found</h3>
                            <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setSearchQuery("")
                                    setRoleFilter(null)
                                    setExpertiseFilter(null)
                                }}
                                className="hover:text-primary hover:border-primary"
                            >
                                Clear all filters
                            </Button>
                        </div>
                    )}
                </div>
            </main>
        </Page>
    )
} 