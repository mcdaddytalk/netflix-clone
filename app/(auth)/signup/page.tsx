import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import GithubIcon from '@/public/github.svg'
import GoogleIcon from '@/public/google.svg'
import { authOptions } from '@/app/utils/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function SignupPage() {
    const session = await getServerSession(authOptions)

    if (session)
        return redirect("/home")

    return (
        <section className='mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14'>
            <form method="POST" action="/api/auth/signin">
                <h1 className="text-3xl font-semibold text-white">Sign up</h1>
                <div className="space-y-4 mt-5">
                    <Input type="email" placeholder="Email" className="bg-[#333] text-white placeholder:text-xs placeholder:text-slate-400 w-full inline-block"/>
                    <Button type="submit" variant="destructive" className="w-full bg-[#e50914]">Sign up</Button>
                </div>
                
            </form>
            <div className="text-slate-500 text-sm mt-2">
                Already have an account? <Link href="/login" className="text-[#e50914] hover:underline">Log in now!</Link>
            </div>
            <div className="flex w-full justify-center items-center mt-5">
                <Button variant="outline" size="icon">
                    <Image src={GithubIcon} alt="Github icon" className="w-5 h-5 bg-slate-300" />
                </Button>
                <Button variant="outline" size="icon">
                    <Image src={GoogleIcon} alt="Google icon" className="w-5 h-5" />
                </Button>
            </div>
        </section>
    )
}
