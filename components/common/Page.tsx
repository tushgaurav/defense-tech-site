export function Page({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto max-w-7xl">
            {children}
        </div>
    )
}

export function PageHeader({ children }: { children: React.ReactNode }) {
    return (
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            {children}
        </div>
    )
}
