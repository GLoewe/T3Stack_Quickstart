import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import {SignInButton, SignOutButton, useUser} from "@clerk/nextjs";

export type Player = {
  id: string;
  name: string;
  kills: number;
  deaths: number;
  assists: number;
  rating: number;
  aim: number;
  }

export default function Home() {
  const user = useUser();
  const userId = user.user?.id;
  const hello  = api.player.hello.useQuery({ text: "test"});
  const  { data} = api.player.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t4-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 bg-red-300 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
            <div>
            test display players stats
              </div>
            <div >
              {data}
            {/*{ data?.map((player) => (*/}
            {/*    <div key={player.id}>{"name: " + player.name}{" kills: " + player.kills}{" deaths: " + player.deaths}</div>*/}
            {/*))}*/}
            </div>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
            </p>
            <AuthShowcase />
          </div>
        </div>
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();
  const user = useUser();

  const { data: secretMessage } = api.player.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {!user.isSignedIn && <SignInButton/>}
      {user.isSignedIn && <SignOutButton/>}
    </div>
  );
}
//
// return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//           className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//           onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
// );