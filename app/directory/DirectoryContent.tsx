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

// Add expertise area styling configuration
const expertiseStyles: Record<ExpertiseArea, { emoji: string; color: string; bgColor: string }> = {
    "AI, Cyber, and OSINT": {
        emoji: "🤖",
        color: "text-blue-300",
        bgColor: "bg-blue-500/20 hover:bg-blue-500/30"
    },
    "Defense & Strategic Technologies": {
        emoji: "🛡️",
        color: "text-purple-300",
        bgColor: "bg-purple-500/20 hover:bg-purple-500/30"
    },
    "Software, SaaS & Product": {
        emoji: "💻",
        color: "text-emerald-300",
        bgColor: "bg-emerald-500/20 hover:bg-emerald-500/30"
    },
    "Space & Advanced Hardware": {
        emoji: "🚀",
        color: "text-orange-300",
        bgColor: "bg-orange-500/20 hover:bg-orange-500/30"
    },
    "Autonomous Systems & Robotics": {
        emoji: "🤖",
        color: "text-cyan-300",
        bgColor: "bg-cyan-500/20 hover:bg-cyan-500/30"
    },
    "Healthcare, Manufacturing & Energy": {
        emoji: "⚡",
        color: "text-yellow-300",
        bgColor: "bg-yellow-500/20 hover:bg-yellow-500/30"
    },
    "Narrative & Public Relations": {
        emoji: "📢",
        color: "text-pink-300",
        bgColor: "bg-pink-500/20 hover:bg-pink-500/30"
    }
}

// Add default style for any unmatched expertise areas
const defaultStyle = {
    emoji: "✨",
    color: "text-primary",
    bgColor: "bg-primary/20 hover:bg-primary/30"
}

interface Member {
    name: string
    role: MemberRole
    description: string
    expertiseAreas: ExpertiseArea[]
    linkedin?: string
    email?: string
    twitter?: string
    website?: string
}

interface DirectoryContentProps {
    initialMembers: Member[]
    totalCount: number
}

const ITEMS_PER_PAGE = 12

function MemberCard({ member }: { member: Member }) {
    return (
        <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-zinc-900 via-zinc-900/95 to-zinc-900/90 backdrop-blur-md border border-zinc-700/50 hover:border-primary/30 hover:scale-[1.02]">
            {/* Tech circuit pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Glowing accent line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />

            <CardContent className="p-6 relative">
                <div className="flex flex-col h-full">
                    <div className="mb-4">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-lg font-bold bg-gradient-to-r from-white via-primary/90 to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                                {member.name}
                            </h3>
                        </div>
                        <p className="text-zinc-200/90 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                            {member.description}
                        </p>
                    </div>
                    <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {member.expertiseAreas.map((area, idx) => {
                                const style = expertiseStyles[area as ExpertiseArea] || defaultStyle;
                                return (
                                    <Badge
                                        key={idx}
                                        variant="secondary"
                                        className={`text-xs px-3 py-1 ${style.bgColor} ${style.color} transition-all duration-300 border border-current/20 group-hover:border-current/30 group-hover:shadow-sm`}
                                    >
                                        <span className="mr-1">{style.emoji}</span>
                                        {area}
                                    </Badge>
                                );
                            })}
                        </div>
                        {(member.linkedin || member.email || member.twitter || member.website) && (
                            <div className="flex gap-4 pt-3 border-t border-zinc-700/50 group-hover:border-primary/20 transition-colors duration-300">
                                {member.linkedin && (
                                    <Link
                                        href={
                                            member.linkedin.startsWith('http') ? member.linkedin : `https://${member.linkedin}`
                                        }
                                        target="_blank"
                                        className="text-zinc-400 hover:text-[#0077B5] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0077B5]/20"
                                        aria-label="LinkedIn Profile"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </Link>
                                )}
                                {member.twitter && (
                                    <a
                                        href={member.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-400 hover:text-[#1DA1F2] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#1DA1F2]/20"
                                        aria-label="Twitter Profile"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </a>
                                )}
                                {member.email && (
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="text-zinc-400 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                                        aria-label="Email Address"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </a>
                                )}
                                {member.website && (
                                    <a
                                        href={member.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-400 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                                        aria-label="Personal Website"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

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
                            <MemberCard key={index} member={member} />
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