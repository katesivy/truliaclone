import { ObjectId } from "mongodb";
import clientPromise from "../lib/mongodb";
import { GetStaticProps } from "next";
import Card from "@/app/(components)/Card";

interface Home {
  _id: ObjectId;
  title: string;
  description: string;
}

interface TopProps {
  homes: Home[];
}

export default function Top({ homes }: TopProps) {
  return (
    <div>
      <h1>All Homes</h1>
      <Card />
      <ul>
        {homes.map((home) => (
          <li key={home._id.toString()} className="p-20">
            <h2 className="text-bold">{home.title}</h2>
            <p>{home.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<TopProps> = async () => {
  try {
    const client = await clientPromise;

    const db = client.db("trulia");

    const homes = await db
      .collection("trulia_data1")
      .find({})
      .sort({})
      .limit(10)
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
