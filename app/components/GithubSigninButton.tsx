"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import GithubIcon from '@/public/github.svg'
import { signIn } from 'next-auth/react'
export default function GithubSigninButton() {
  return (
    <Button onClick={() => signIn('github')} variant="outline" size="icon">
        <Image src={GithubIcon} alt="Github icon" className="w-5 h-5 bg-slate-300" />
    </Button>
  )
}
