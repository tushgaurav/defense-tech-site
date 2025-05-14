import Link from "next/link"
import Image from "next/image"
import { Shield, Users, Database, Rocket, ChevronRight, Zap, Target, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Page } from "@/components/common/Page"

export default function Home() {
  return (
    <Page>
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-orange-500" />
            <span className="text-lg font-bold">Defense Tech Community</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link href="/directory" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Directory
            </Link>
            <Link href="#ecosystem" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Ecosystem
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-orange-500 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="https://tally.so/r/mOg2pA"
              target="_blank"
              className="inline-flex h-9 items-center justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-700"
            >
              Join Community
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] pointer-events-none"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm text-orange-500 mb-4 w-fit">
                  <span className="mr-1">🇮🇳</span> Atmanirbhar Bharat in Defense
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-500">
                    Defense Tech Community
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A network of Indian defense tech enthusiasts building the future of national security and
                    technological sovereignty.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                  <Link
                    href="/directory"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-orange-600 px-8 text-sm font-medium text-white shadow-lg shadow-orange-600/20 transition-all hover:bg-orange-700 hover:shadow-orange-600/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-700"
                  >
                    Explore Directory
                  </Link>
                  <Link
                    href="#ecosystem"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Learn About Ecosystem
                  </Link>
                </div>
                <div className="mt-6 flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Users className="mr-1 h-4 w-4 text-orange-500" />
                    <span>40+ Members</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="mr-1 h-4 w-4 text-orange-500" />
                    <span>7 Expertise Areas</span>
                  </div>
                  <div className="flex items-center">
                    <Rocket className="mr-1 h-4 w-4 text-orange-500" />
                    <span>Growing Network</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-border/40 shadow-xl">
                  <Image
                    src="/images/drones.png"
                    width={500}
                    height={400}
                    alt="Indian Defense Technology"
                    className="object-cover w-full h-full"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="text-sm font-medium text-orange-500">Indigenous Innovation</div>
                    <div className="text-xl font-bold">Building for Bharat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ecosystem" className="w-full py-12 md:py-24 lg:py-32 bg-background/90 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-500/10 px-3 py-1 text-sm text-orange-500">
                  Defense Startup Ecosystem
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  India's Rising Defense Tech Landscape
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The strategic push for self-reliance is transforming India's defense technology sector
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/40 shadow-sm hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 mb-6">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">₹1.5 Lakh Crore Market</h3>
                <p className="text-muted-foreground">
                  India's defense sector is projected to reach ₹1.5 lakh crore by 2025, with startups playing a crucial
                  role in indigenous development.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/40 shadow-sm hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 mb-6">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">120+ Defense Startups</h3>
                <p className="text-muted-foreground">
                  Over 120 defense tech startups are now actively developing cutting-edge technologies across drones,
                  AI, robotics, and advanced materials.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/40 shadow-sm hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 mb-6">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">iDEX Initiative</h3>
                <p className="text-muted-foreground">
                  The Innovations for Defence Excellence (iDEX) has awarded over ₹250 crore to startups developing
                  defense technologies.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-card/50 backdrop-blur-sm rounded-lg border border-border/40 shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Strategic Self-Reliance</h3>
                  <p className="text-muted-foreground mb-6">
                    India's defense startup ecosystem is rapidly evolving, driven by the government's push for
                    Atmanirbhar Bharat (self-reliant India) in defense manufacturing. The Defense Ministry has set a
                    target of 70% self-reliance in weaponry by 2027, creating unprecedented opportunities for indigenous
                    innovation.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-orange-500/20 flex items-center justify-center mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>25% of defense R&D budget earmarked for startups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-orange-500/20 flex items-center justify-center mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>₹10,000 crore allocated for defense modernization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-orange-500/20 flex items-center justify-center mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>68% increase in defense exports in the last 5 years</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-full min-h-[300px]">
                  <Image
                    src="/images/startups.png"
                    fill
                    alt="Indian Defense Startup Ecosystem"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background relative">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] pointer-events-none"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-500/10 px-3 py-1 text-sm text-orange-500">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Building India's Defense Tech Ecosystem
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connecting investors, founders, advisors, and enthusiasts to accelerate innovation in India's defense
                  technology sector.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Community Network</h3>
                      <p className="text-muted-foreground">
                        Connect with like-minded professionals dedicated to advancing India's defense capabilities.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                      <Database className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Knowledge Sharing</h3>
                      <p className="text-muted-foreground">
                        Access expertise across AI, robotics, space tech, and other critical defense domains.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                      <Rocket className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Innovation Catalyst</h3>
                      <p className="text-muted-foreground">
                        Accelerate the development of indigenous defense technologies for Atmanirbhar Bharat.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-border/40 shadow-xl">
                  <Image
                    src="/images/defense.png"
                    fill
                    alt="Defense Tech Innovation"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background/90">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Community Categories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our directory features experts across various domains of defense technology
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/40 shadow-sm hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-banknote"
                  >
                    <rect width="20" height="12" x="2" y="6" rx="2" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M6 12h.01M18 12h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Investors</h3>
                <p className="text-muted-foreground text-center">
                  VCs and angel investors funding the future of defense tech
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/40 shadow-sm hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-rocket"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Founders</h3>
                <p className="text-muted-foreground text-center">
                  Entrepreneurs building cutting-edge defense startups
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/40 shadow-sm hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-brain"
                  >
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z" />
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Advisors</h3>
                <p className="text-muted-foreground text-center">
                  Strategic experts guiding the defense tech ecosystem
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/40 shadow-sm hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-megaphone"
                  >
                    <path d="m3 11 18-5v12L3 13" />
                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Influencers</h3>
                <p className="text-muted-foreground text-center">Thought leaders shaping the defense tech narrative</p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Link
                href="/directory"
                className="inline-flex items-center justify-center rounded-md bg-orange-600 px-8 py-3 text-sm font-medium text-white shadow-lg shadow-orange-600/20 transition-all hover:bg-orange-700 hover:shadow-orange-600/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-700"
              >
                Explore Full Directory <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80 relative"
        >
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] pointer-events-none"></div>
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Join India's Defense Tech Revolution
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be part of the community shaping the future of India's defense technology ecosystem.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:justify-end">
              <form className="grid gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/40 shadow-md">
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-600/20 transition-all hover:shadow-orange-600/30"
                >
                  Subscribe to Updates
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border/40 bg-background/90 backdrop-blur-sm">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between md:py-8 px-4 md:px-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-orange-500" />
              <span className="text-lg font-bold">Defense Tech Community</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting India's defense tech ecosystem. © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </Page>
  )
}
