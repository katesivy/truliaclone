import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db("trulia");
    const homes = await db
      .collection("trulia_data1")
      .find({})
      .sort({})
      .limit(10)
      .toArray();
    res.json(homes);
  } catch (e) {
    console.error(e);
  }
};
