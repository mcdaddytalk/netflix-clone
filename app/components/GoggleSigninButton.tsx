"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import GoogleIcon from '@/public/google.svg'
import { signIn } from 'next-auth/react'
export default function GoogleSigninButton() {
  return (
    <Button onClick={() => signIn('google')} variant="outline" size="icon">
        <Image src={GoogleIcon} alt="Github icon" className="w-5 h-5 bg-slate-300" />
    </Button>
  )
}
