import { type Session } from "next-auth";
import { type AppType } from "next/app";

import { api } from "~/utils/api";
import { ClerkProvider } from "@clerk/nextjs";
import "~/styles/globals.css";
import Head from "next/head";
import React from "react";


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: {  ...pageProps },
}) => {
  return (
      <ClerkProvider {...pageProps}>
          <Head>
              <title>Prototype T3 App</title>
              <meta name="T3-Stack Quickstart" content="by Gianluca Löwe"/>
          </Head>
          <Component {...pageProps} />
      </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
