import { ObjectId } from "mongodb";
import clientPromise from "../lib/mongodb";
import { InferGetStaticPropsType, GetStaticProps } from "next";
import Card from "@/app/(components)/Card";
import React from "react";
import Hero from "@/app/(components)/Hero";
import Nav from "@/app/(components)/Nav";
import HomesGrid from "@/app/(components)/HomesGrid";
import HomeById from "./home/[id]";
import type { Metadata } from "next";
interface Home {
  _id: ObjectId;
  title: string;
  description: string;
}

interface TopProps {
  homes: Home[];
}

export const metadata: Metadata = {
  title: "Trulia Clone",
};

export const getStaticProps: GetStaticProps<TopProps> = async () => {
  try {
    const client = await clientPromise;

    const db = client.db("trulia");

    const homes = await db
      .collection("trulia_data1")
      .find({})
      .sort({})
      .limit(20)
      .toArray();

    return {
      props: { homes: JSON.parse(JSON.stringify(homes)) },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { homes: [] },
    };
  }
};

export default function Page({
  homes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <main>
        <Hero />
        <HomesGrid props={homes} />
      </main>
    </>
  );
}
