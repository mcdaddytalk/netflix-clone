import Image from "next/image"
import NetflixBackground from "@/public/login_background.jpg"
import NetflixLogo from "@/public/netflix_logo.svg"
export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
            <Image src={NetflixBackground} alt="netflix background" fill priority className="hidden brightness-50 sm:flex sm:object-cover -z-10" />
            <Image src={NetflixLogo} alt="netflix logo" priority width={120} height={120} className="absolute left-4 top-4 object-contain md:left-10 md:top-6" />
            {children}
        </main>
    )
}