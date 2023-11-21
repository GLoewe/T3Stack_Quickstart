import {SignOutButton, useUser} from "@clerk/nextjs";
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import UpdateUsername from "~/components/UpdateUsername";
import Link from "next/link";

export default function Id() {

    const { user, isSignedIn, isLoaded} = useUser();
    return (
        <>
            <main
                className=" flex min-h-screen flex-col items-center padding-top-5 ">
                <div> Profile Page
                </div>
                <div>
                    <Link href={`/user/${user?.username}`}>
                        <Router>
                            <UpdateUsername/>
                        </Router>
                    </Link>
                </div>
                <div>
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