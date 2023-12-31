import {SignOutButton, useUser} from "@clerk/nextjs";
import React from "react";
import Link from "next/link";
import SupabaseLogo from "~/components/SupabaseLogo";
import NextJsLogo from "~/components/NextJsLogo";
import VercelLogo from "~/components/VercelLogo";
import PrismaLogo from "~/components/PrismaLogo";
import ClerkLogo from "~/components/ClerkLogo";
import TailwindLogo from "~/components/TailwindLogo";
import MoreInfoArrow from "~/components/MoreInfoArrow";

const resources = [
    {
        title: 'Next.js',
        subtitle:
            'Framework',
        url: 'https://nextjs.org/',
    },
    {
        title: 'Supabase',
        subtitle:
            'Database Provider',
        url: 'https://supabase.com/',
    },
    {
        title: 'Vercel',
        subtitle:
            'Hosting',
        url: 'https://vercel.com/',
    },
    {
        title: 'Clerk',
        subtitle:
            'Authentication Provider',
        url: 'https://clerk.com/',
    },
    {
        title: 'Prisma',
        subtitle:
            'Next Generation ORM',
        url: 'https://www.prisma.io/',
    },
    {
        title: 'Tailwind CSS',
        subtitle:
            'Styling',
        url: 'https://tailwindcss.com/',
    },
]

export default function Home() {
    const {user} = useUser();

    if (!user) return null;

    return (
        <>
            <main
                className="min-h-screen flex-col items-center justify-center ">
                <div className="w-full flex flex-col items-center ">
                    <nav className="w-full flex justify-center border-b border-b-foreground/10">
                        <div className="w-full flex p-3 text-sm text-foreground bg-gradient-to-b from-[#172554] to-[#1f2937] justify-center ">

                            <div className="flex items-center gap-8">
                                Hey, {user.username ? user.username : user.id}
                                <div>
                                    <Link href={`/user/${user?.username}`}>
                                        <span>{`Profile Page`}</span>
                                    </Link>
                                </div>
                                <SignOutButton/>
                            </div>

                        </div>
                    </nav>

                    <div
                        className=" animate-in flex flex-col gap-14 opacity-0 max-w-4xl px-3 py-16 lg:py-24 text-foreground">
                        <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
                        <p className="text-3xl lg:text-5xl !leading-tight mx-auto max-w-xl text-center my-12">
                            Integrated Technologies
                        </p>

                        <div className="flex flex-col items-center mb-4 lg:mb-12">
                            <div className="flex gap-8 justify-center items-center">
                                <Link href="https://nextjs.org/" target="_blank">
                                    <NextJsLogo/>
                                </Link>
                                <Link href="https://supabase.com/" target="_blank">
                                    <SupabaseLogo/>
                                </Link>
                                <Link href="https://vercel.com/" target="_blank">
                                    <VercelLogo/>
                                </Link>
                            </div>

                            <div className="flex gap-8 justify-center items-center">
                                <Link href="https://clerk.com/" target="_blank">
                                    <ClerkLogo/>
                                </Link>

                                <Link href="https://prisma.io/" target="_blank">
                                    <PrismaLogo/>
                                </Link>
                                <Link href="https://tailwindcss.com/" target="_blank">
                                    <TailwindLogo/>
                                </Link>
                            </div>
                        </div>

                        <div
                            className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent"/>

                        <div className="flex flex-col gap-8 text-foreground">
                            <h2 className="text-lg font-bold text-center">
                                Everything you need to get started
                            </h2>
                            <div  className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                {resources.map(({title, subtitle, url}) => (
                                    <a
                                        key={title}
                                        className="bg-gradient-to-b from-[#2e026d] to-[#15162c] relative flex flex-col group rounded-lg border p-6 hover:border-foreground"
                                        href={url}
                                        target="_blank"
                                        rel="noreferrer"
                                        color={"none"}
                                    >
                                        <h3 className="font-bold mb-2  min-h-[40px] lg:min-h-[60px]">
                                            {title}
                                        </h3>
                                        <div className="flex flex-col grow gap-4 justify-between">
                                            <p className="text-sm opacity-70">{subtitle}</p>
                                            <MoreInfoArrow/>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}