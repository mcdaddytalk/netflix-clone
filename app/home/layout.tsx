import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import NavBar from "../components/NavBar"
import { authOptions } from "../utils/auth"

export default async function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const session = await getServerSession(authOptions)

    if (!session)
        return redirect("/login")

    return (
        <>
            <NavBar />
            <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
                {children}
            </main>
        </>
    )
}