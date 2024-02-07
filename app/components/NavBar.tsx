"use client"

import { usePathname } from 'next/navigation';
import React from 'react'
import Link from 'next/link';
import NetflixLogo from '@/public/netflix_logo.svg';
import Image from 'next/image';
import { Search, Bell } from 'lucide-react';
import UserNav from './UserNav';

interface NavLinkProps {
    name: string;
    href: string;
  }
  
  const links: NavLinkProps[] = [
    { name: "Home", href: "/home" },
    { name: "Tv Shows", href: "/home/shows" },
    { name: "Movies", href: "/home/movies" },
    { name: "Recently Added", href: "/home/recently" },
    { name: "My List", href: "/home/user/list" },
  ];
 
export default function NavBar() {
    const pathName = usePathname();
    return (
        <section className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
            <nav className="flex items-center">
                <Link href="/home" className="w-32">
                    <Image src={NetflixLogo} alt="Netflix logo" priority width={120} height={120} />
                </Link>
                <ul className="lg:flex gap-x-4 ml-14 hidden">
                    {links.map((link) => (
                        <React.Fragment key={link.name}>
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={pathName === link.href ? "text-white underline font-semibold text-sm" : "text-slate-300 font-normal text-sm"}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        </React.Fragment>
                    ))}
                </ul>
            </nav>
            <div className="flex items-center gap-x-8">
                <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
                <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
                <UserNav />
            </div>
        </section>
    )
}
