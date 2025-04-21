import { GetStaticProps } from "next";
import clientPromise from "../../../lib/mongodb";
import React from "react";
import SelectedHome from "@/app/(components)/SelectedHome";


export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const client = await clientPromise;

    const db = client.db("trulia");
    const homes = await db
      .collection("trulia_data1")
      .find({
        address_full: context?.params?.id,
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
    const res = await db.collection("trulia_data1").find({}).sort({}).toArray();
    const data = JSON.parse(JSON.stringify(res));
    const ids = data.map((item: {address_full: string}) => item.address_full);
    const paths = ids.map((item: {id: string}) => ({ params: { id: item.toString() } }));

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

  return (
    <>
      <SelectedHome props={home} />
    </>
  );
};

export default HomeById;
