import {useUser} from "@clerk/nextjs";
import React from "react";
import UpdateUsername from "~/components/UpdateUsername";
import Link from "next/link";

export default function Id() {
    const {user} = useUser();

    return (
        <>
            <main
                className=" flex min-h-screen flex-col items-center p-6 ">
                <div className={"text-xl"}> Profile Page
                </div>

                <div className={"p-6"}>
                    <Link href={`/user/${user?.username}`}>
                        <UpdateUsername/>
                    </Link>
                </div>

                <div >
                    <Link href={"/"}>
                        <button>
                            Go Back
                        </button>
                    </Link>
                </div>

            </main>
        </>
    )
};