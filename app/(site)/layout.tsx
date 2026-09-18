import Link from "next/link";

export default function SiteLayout({ children }: { children: React.ReactNode}) {
    return (
        <>
            <header>
                <Link href="/">Home</Link>
                <Link href="/about">Sobre</Link>
            </header>
            <main>
                {children}
            </main> 
        </>
    )
};