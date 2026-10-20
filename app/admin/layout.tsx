import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Admin page"
} 

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header>
                <h1>Admin</h1>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}