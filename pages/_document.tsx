import Nav from "@/app/(components)/Nav";
import { Html, Head, Main, NextScript } from "next/document";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TruliaClone",
  description: "...",
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="TruliaClone" />
      </Head>
      <body>
        <Nav />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
