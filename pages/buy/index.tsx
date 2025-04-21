import { GetStaticProps } from "next";
import clientPromise from "../../lib/mongodb";
import React from "react";
import Buy from "@/app/(components)/Buy";

export const getStaticProps: GetStaticProps = async () => {
  try {
    const client = await clientPromise;

    const db = client.db("trulia");
    const homes = await db
      .collection("trulia_data1")
      .find({
        state: "TN",
      })
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

const HomeByState = (props: any) => {
  return (
    <div className="container flex text-black">
      <Buy props={[props.homes]} />
    </div>
  );
};

export default HomeByState;
