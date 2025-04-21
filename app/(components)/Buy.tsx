import Link from "next/link";
import { HomeImage } from "./HomeImage";

export type Home = {
  _id: string,
  unique_id: string,
  image_url: string,
  beds: number,
  bath: number,
  sqr_ft: string,
  title: string
}

const Buy = (props: any) => {

  return (
    <div className="object-fill">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {props.props[0].map((home: Home) => {
          return (
            <div className="col-span-1 md:col-span-1 border" key={home._id}>
              <Link
                href="/home/[id]"
                as={`/home/${home.unique_id}`}
                key={home._id}
              >
                <HomeImage urlToImage={home.image_url} title={"home"} />
                {home.title}
                <div className="flex">
                  <p>
                    {home.beds}bd {home.bath}ba {home.sqr_ft} Square Feet
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Buy;
