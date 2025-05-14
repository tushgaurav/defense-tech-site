import Link from "next/link";
import { Shield } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/90 backdrop-blur-sm">
            <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between md:py-8 px-4 md:px-6 mx-auto max-w-8xl">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <Shield className="h-6 w-6 text-orange-500" />
                        <span className="text-lg font-bold">Defense Tech Community</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Connecting India&apos;s defense tech ecosystem. © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
                <div className="flex gap-4 text-sm text-muted-foreground">
                    <Link href="https://agihouse.in" target="_blank" className="hover:text-orange-500 transition-colors">
                        AGI House India
                    </Link>
                    <Link href="#" className="hover:text-orange-500 transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="#" className="hover:text-orange-500 transition-colors">
                        Terms of Service
                    </Link>
                    <Link href="#" className="hover:text-orange-500 transition-colors">
                        Contact
                    </Link>
                    <Link
                        href="https://x.com/agihouseindia"
                        target="_blank"
                        className="hover:text-orange-500 transition-colors"
                    >
                        X (Twitter)
                    </Link>
                </div>
            </div>
        </footer>
    );
}
