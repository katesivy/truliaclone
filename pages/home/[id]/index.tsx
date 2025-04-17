import { GetStaticProps } from "next";
import clientPromise from "../../../lib/mongodb";
import Link from "next/link";
import React from "react";
import { ObjectId } from "mongodb";
import SelectedHome from "@/app/(components)/SelectedHome";

interface Home {
  _id: ObjectId;
  title: string;
  description: string;
}

interface TopProps {
  homes: Home[];
}

export const getStaticProps: GetStaticProps<TopProps> = async (context) => {
  console.log("context", context);
  try {
    const client = await clientPromise;

    const db = client.db("trulia");
    // const title = `${context.params.unique_id}`
    //change to fi${nd home by id}
    const homes = await db
      .collection("trulia_data1")
      .find({
        unique_id: context?.params?.id,
      })
      .sort({})
      .toArray();

    return {
      props: { home: JSON.parse(JSON.stringify(homes)) },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { home: [] },
    };
  }
};

export const getStaticPaths = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("trulia");
    //change to find home by id
    const res = await db.collection("trulia_data1").find({}).sort({}).toArray();
    const data = JSON.parse(JSON.stringify(res));
    // const ids = data.map(item => (item.id));
    const ids = data.map((item) => item.unique_id);
    const paths = ids.map((item) => ({ params: { id: item.toString() } }));

    return {
      paths,
      fallback: false,
    };
  } catch (e) {
    console.error(e);
    return {
      props: { home: [] },
    };
  }
};

const HomeById = (home: any) => {
  console.log("homesbyid home", home);

  return (
    <>
      <SelectedHome props={home} />
    </>
  );
};

export default HomeById;
