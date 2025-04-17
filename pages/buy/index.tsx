import { GetStaticProps } from "next";
import clientPromise from "../../lib/mongodb";
import Link from "next/link";
import React from "react";
import { ObjectId } from "mongodb";
import Buy from "@/app/(components)/Buy";

interface Home {
  _id: ObjectId;
  title: string;
  description: string;
}

interface TopProps {
  homes: Home[];
}

export const getStaticProps: GetStaticProps<TopProps> = async () => {
  try {
    const client = await clientPromise;

    const db = client.db("trulia");
    //change to find home by id
    const homes = await db
      .collection("trulia_data1")
      .find({
        state: "TN",
      })
      .sort({})
      .limit(100)
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
  // console.log("homesbystate homes", props.homes[0], props.homes);

  return (
    <div className="container flex text-black">
      <Buy props={[props.homes]} />
    </div>
  );
};

export default HomeByState;
