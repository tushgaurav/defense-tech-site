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
    | "💰 Investor"
    | "🧠 Advisor"
    | "🚀 Founder"
    | "💫 Want to be a founder"
    | "⚙️ Operator"
    | "📣 Influencer"
type ExpertiseArea =
    | "🤖 AI, Cyber, and OSINT"
    | "🛡️ Defense & Strategic Technologies"
    | "💻 Software, SaaS & Product"
    | "🛰️ Space & Advanced Hardware"
    | "🦾 Autonomous Systems & Robotics"
    | "🏭 Healthcare, Manufacturing & Energy"
    | "📢 Narrative & Public Relations"

interface Member {
    name: string
    role: MemberRole
    description: string
    expertiseAreas: ExpertiseArea[]
}

// Sample data based on the provided text
const communityMembers: Member[] = [
    {
        name: "Amit Gupta",
        role: "💰 Investor",
        description: "Angel-syndicate lead; invested in Nexstem, Rekise, Armory; evaluating Defendron",
        expertiseAreas: [
            "🤖 AI, Cyber, and OSINT",
            "🛡️ Defense & Strategic Technologies",
            "💻 Software, SaaS & Product",
            "🛰️ Space & Advanced Hardware",
        ],
    },
    {
        name: "Rajeev Mantri",
        role: "💰 Investor",
        description: "Managing Partner, Navam Capital; active in narrative building",
        expertiseAreas: ["🛡️ Defense & Strategic Technologies"],
    },
    {
        name: "Mridul Mittal",
        role: "💰 Investor",
        description: "VC Fellow, Sigma Ventures; building defense/spacetech fund",
        expertiseAreas: ["🛡️ Defense & Strategic Technologies", "🛰️ Space & Advanced Hardware"],
    },
    {
        name: "Natasha Malpani",
        role: "💰 Investor",
        description: "VC at Kae Capital with cross-sector experience",
        expertiseAreas: [
            "🤖 AI, Cyber, and OSINT",
            "🛡️ Defense & Strategic Technologies",
            "🏭 Healthcare, Manufacturing & Energy",
        ],
    },
    {
        name: "Harnidh K",
        role: "💰 Investor",
        description: "Investor, WTFund; 4+ defense investments",
        expertiseAreas: ["🛡️ Defense & Strategic Technologies", "🛰️ Space & Advanced Hardware"],
    },
    {
        name: "Pawan Kumar Chandana",
        role: "💰 Investor",
        description: "Co-founder Skyroot; now investing in early-stage defense tech",
        expertiseAreas: ["🛡️ Defense & Strategic Technologies", "🛰️ Space & Advanced Hardware"],
    },
    {
        name: "Jatin Karani",
        role: "💰 Investor",
        description: "GP, Samarthya VC; invested in five defense startups",
        expertiseAreas: ["🛡️ Defense & Strategic Technologies", "🛰️ Space & Advanced Hardware"],
    },
    {
        name: "Sanjay Srivastava",
        role: "🧠 Advisor",
        description: "Strategic advisor; built $2B Make-in-India manufacturing ecosystem",
        expertiseAreas: ["🛡️ Defense & Strategic Technologies", "🏭 Healthcare, Manufacturing & Energy"],
    },
    {
        name: "Prince Anand",
        role: "🧠 Advisor",
        description: "Analyst at Forge supporting defense startups",
        expertiseAreas: ["🛡️ Defense & Strategic Technologies"],
    },
    {
        name: "Prasanna",
        role: "🧠 Advisor",
        description: "Weather-adjusted targeting for the Indian Army",
        expertiseAreas: ["🛡️ Defense & Strategic Technologies"],
    },
    {
        name: "Sayan",
        role: "🧠 Advisor",
        description: "Deep-tech energy work for DRDO projects",
        expertiseAreas: [
            "🛡️ Defense & Strategic Technologies",
            "🏭 Healthcare, Manufacturing & Energy",
            "🛰️ Space & Advanced Hardware",
        ],
    },
    {
        name: "Abhinav Das",
        role: "🚀 Founder",
        description: "Building AI-powered robots trainable via prompts",
        expertiseAreas: ["🦾 Autonomous Systems & Robotics"],
    },
    {
        name: "Amrit",
        role: "🚀 Founder",
        description: "OSINT + misinformation detection engine",
        expertiseAreas: ["🤖 AI, Cyber, and OSINT"],
    },
    {
        name: "Trisha Chander",
        role: "🚀 Founder",
        description: "Early-stage founder focused on drones",
        expertiseAreas: ["🤖 AI, Cyber, and OSINT"],
    },
    {
        name: "Krutik Virani",
        role: "🚀 Founder",
        description: "Runs SpyVeil (offensive & defensive services)",
        expertiseAreas: ["🤖 AI, Cyber, and OSINT"],
    },
    {
        name: "Royan Sanju",
        role: "🚀 Founder",
        description: "Building battlefield AI agents",
        expertiseAreas: ["🦾 Autonomous Systems & Robotics"],
    },
    {
        name: "Abhijit",
        role: "🚀 Founder",
        description: "AI drone swarms for surveillance and counter-terror ops",
        expertiseAreas: ["🦾 Autonomous Systems & Robotics"],
    },
    {
        name: "Kumar Mayank",
        role: "🚀 Founder",
        description: "Founder, Dilaton",
        expertiseAreas: ["🦾 Autonomous Systems & Robotics"],
    },
    {
        name: "Apurv Padlia",
        role: "🚀 Founder",
        description: "Working on eVTOL control & unmanned wingmen",
        expertiseAreas: ["🦾 Autonomous Systems & Robotics"],
    },
    {
        name: "Bhanu Teja Chidura",
        role: "🚀 Founder",
        description: "Full-stack drone builder",
        expertiseAreas: ["🦾 Autonomous Systems & Robotics"],
    },
    {
        name: "Mohan Sivam",
        role: "🚀 Founder",
        description: "Founder, Neuralzome",
        expertiseAreas: ["🦾 Autonomous Systems & Robotics"],
    },
    {
        name: "Karan Goyal",
        role: "🚀 Founder",
        description: "Leads Sharang Shakti (mini Iron Dome)",
        expertiseAreas: ["🛡️ Defense & Strategic Technologies"],
    },
    {
        name: "Shivam Tyagi",
        role: "🚀 Founder",
        description: "Indigenous drone-manufacturing focus",
        expertiseAreas: ["🦾 Autonomous Systems & Robotics"],
    },
    {
        name: "Vishal Tejwani",
        role: "🚀 Founder",
        description: "Enabling local electronics manufacturing",
        expertiseAreas: ["🛰️ Space & Advanced Hardware"],
    },
    {
        name: "Ayan Pahwa",
        role: "🚀 Founder",
        description: "Working with special forces; Make-in-India Podcast host",
        expertiseAreas: ["🦾 Autonomous Systems & Robotics"],
    },
    {
        name: "Besta Prem Sai",
        role: "🚀 Founder",
        description: "Edge-AI precision-strike drones at VECROS",
        expertiseAreas: ["🦾 Autonomous Systems & Robotics"],
    },
    {
        name: "Roopam & Manasvi",
        role: "🚀 Founder",
        description: "Co-founder, SpaceRelays (MEO optical links)",
        expertiseAreas: ["🛰️ Space & Advanced Hardware"],
    },
    {
        name: "Subham",
        role: "🚀 Founder",
        description: "CEO, Space Resources Lab",
        expertiseAreas: ["🛰️ Space & Advanced Hardware"],
    },
    {
        name: "Ishaan Aggarwal",
        role: "💫 Want to be a founder",
        description: "Building advanced reactors at Valar Atomics",
        expertiseAreas: ["🛰️ Space & Advanced Hardware"],
    },
    {
        name: "Prathamesh Kulkarni",
        role: "💫 Want to be a founder",
        description: 'AI intern; wants to build cyber-forensics startup "Samekh"',
        expertiseAreas: ["🤖 AI, Cyber, and OSINT"],
    },
    {
        name: "Karan (Anthropic)",
        role: "💫 Want to be a founder",
        description: "Ex-Apple/Anthropic; wants to build Palantir/Anduril for India",
        expertiseAreas: ["🛡️ Defense & Strategic Technologies"],
    },
    {
        name: "Raghav Duddala",
        role: "💫 Want to be a founder",
        description: "Robotics engineer; wants to replicate Anduril-style startups in India",
        expertiseAreas: ["🦾 Autonomous Systems & Robotics", "🛡️ Defense & Strategic Technologies"],
    },
    {
        name: "Mayank Kedia",
        role: "💫 Want to be a founder",
        description: "SF-based; wants to return to India to build defense-infra startup",
        expertiseAreas: ["🛡️ Defense & Strategic Technologies"],
    },
    {
        name: "Nischal",
        role: "⚙️ Operator",
        description: "Ecom background; coding + product; wants to help defense projects",
        expertiseAreas: ["💻 Software, SaaS & Product"],
    },
    {
        name: "Archit",
        role: "⚙️ Operator",
        description: "Engineer in Canada; inspired by Anduril",
        expertiseAreas: ["💻 Software, SaaS & Product"],
    },
    {
        name: "Sid (@Cloudwatch199)",
        role: "📣 Influencer",
        description: "Indian-American voice shaping global narrative",
        expertiseAreas: ["📢 Narrative & Public Relations"],
    },
    {
        name: "Shruti Chaturvedi",
        role: "📣 Influencer",
        description: "Public voice on defense innovation",
        expertiseAreas: ["📢 Narrative & Public Relations"],
    },
    {
        name: "Aanchal Agrawal",
        role: "📣 Influencer",
        description: "Public voice on defense innovation",
        expertiseAreas: ["📢 Narrative & Public Relations"],
    },
]

// Get unique roles and expertise areas for filters
const uniqueRoles = Array.from(new Set(communityMembers.map((member) => member.role)))
const uniqueExpertiseAreas = Array.from(new Set(communityMembers.flatMap((member) => member.expertiseAreas)))

export default function DirectoryPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [roleFilter, setRoleFilter] = useState<string | null>(null)
    const [expertiseFilter, setExpertiseFilter] = useState<string | null>(null)

    // Filter members based on search query and filters
    const filteredMembers = useMemo(() => {
        return communityMembers.filter((member) => {
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
    }, [searchQuery, roleFilter, expertiseFilter])

    // Get role emoji
    const getRoleEmoji = (role: string) => {
        return role.split(" ")[0]
    }

    // Get role name without emoji
    const getRoleName = (role: string) => {
        return role.split(" ").slice(1).join(" ")
    }

    return (
        <Page>
            <main className="flex-1 py-6 md:py-10 relative">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] pointer-events-none"></div>
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="flex items-center mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center mr-4 text-sm font-medium text-muted-foreground hover:text-orange-500 transition-colors"
                        >
                            <ArrowLeft className="mr-1 h-4 w-4" />
                            Back to Home
                        </Link>
                        <h1 className="text-2xl md:text-3xl font-bold">🇮🇳 Defense Tech Community Directory</h1>
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
                                    className="text-xs hover:text-orange-500"
                                >
                                    Clear all filters
                                </Button>
                            </div>
                        )}
                    </div>

                    <div className="mb-4">
                        <p className="text-muted-foreground">
                            Showing {filteredMembers.length} of {communityMembers.length} members
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {filteredMembers.map((member, index) => (
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
                                                    <span className="mr-1">{getRoleEmoji(member.role)}</span>
                                                    {getRoleName(member.role)}
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
                                                        className="text-xs bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 transition-colors"
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
                                className="hover:text-orange-500 hover:border-orange-500"
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
