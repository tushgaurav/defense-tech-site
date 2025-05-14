import Link from "next/link";
import { Shield } from "lucide-react";
export default function Nav() {
    return (
        <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto max-w-8xl">
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
    )
}