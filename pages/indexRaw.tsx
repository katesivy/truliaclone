import clientPromise from "../lib/mongodb";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import client from "@/lib/mongodb";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Hero from "@/app/(components)/Hero";

type ConnectionStatus = {
  isConnected: boolean;
};

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  try {
    await client.connect(); // `await client.connect()` will use the default database passed in the MONGODB_URI
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//       const client = await clientPromise;
//       const db = client.db("trulia");
//       const homes = await db
//           .collection("trulia_data1")
//           .find({})
//           .sort({})
//           .limit(20)
//           .toArray();
//       return {
//           props: { homes: JSON.parse(JSON.stringify(homes)) },
//       };
//   } catch (e) {
//       console.error(e);
//       return { props: { homes: [] } };
//   }
// };

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <Hero props={getServerSideProps} />
    </main>
  );
}
