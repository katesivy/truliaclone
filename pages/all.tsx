import { ObjectId } from "mongodb";
import clientPromise from "../lib/mongodb";
import { GetStaticProps } from "next";


interface Home {
   _id: ObjectId;
   title: string;
   metacritic: number;
   plot: string;
}


interface TopProps {
   homes: Home[];
}


export default function Top({ homes }: TopProps) {
   return (
       <div>
           <h1>All Homes</h1>
          
           <ul>
               {homes.map((home) => (
                   <li key={home._id.toString()}>
                       <h2>{home.Title}</h2>
                       <p>{home.Description}</p>
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
           .collection("trulia_data")
           .find({})
           .sort({  })
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