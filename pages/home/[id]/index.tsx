import { GetStaticProps } from "next";
import clientPromise from "../../../lib/mongodb";
import Link from "next/link";
import React from "react";
import { ObjectId } from "mongodb";

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
      .find({})
      .sort({})
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

const HomeById = (homes: any) => {
  console.log("homesbyid homes", homes.props);

  return (
    <div className="container flex text-black">
      homes
      {homes.props.map(
        (home: { _id: string; title: string }, index: string) => {
          return (
            <div className="grid auto-cols-fr grid-flow-col gap-4 border">
              {/* <Link href="/home/[id]" as={`/home/${home._id}`} key={home._id}> */}
              <Link href="/">{home.title}</Link>
            </div>
          );
        }
      )}
    </div>
  );
};

export default HomeById;
