// import clientPromise from "../lib/mongodb";
// import { GetServerSideProps } from 'next';

// interface Home {
//    _id: string;
//    title: string;
//    description: string;
// }

// interface HomesProps {
//    homes: Home[];
// }

// const Homes: React.FC<HomesProps> = ({ homes }) => {
//    return (
//        <div>
//            <h1>Homes List</h1>

//            <ul>
//                {homes.map((home) => (
//                    <li key={home._id}>
//                        <h2>{home.title}</h2>
//                    </li>
//                ))}
//            </ul>
//        </div>
//    );
// };

// export default Homes;

// export const getServerSideProps: GetServerSideProps = async () => {
//    try {
//        const client = await clientPromise;
//        const db = client.db("trulia");
//        const homes = await db
//            .collection("trulia_data1")
//            .find({})
//            .sort({})
//            .limit(20)
//            .toArray();
//        return {
//            props: { homes: JSON.parse(JSON.stringify(homes)) },
//        };
//    } catch (e) {
//        console.error(e);
//        return { props: { homes: [] } };
//    }
// };
