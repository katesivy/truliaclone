import Link from "next/link";
import { HomeImage } from "./HomeImage";
import Image from "next/image";

export type Home = {
  price: string;
  address_full: any;
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
    <div className="flex p-2 w-screen">
      <div className="flex w-screen">
      {/* 768+ 1 col with map container | 995 2 col with map container*/}
        <div className="grid md:w-2/3 grid-cols-1 lg:grid-cols-2 gap-4 p-2">
          {props.props[0].map((home: Home) => {
            const addressSplit = home.address_full.split(',');
            const addressTop = addressSplit.shift();
            const addressBottom = addressSplit.join(',');

            return (
              <div className="col-span-1" key={home._id}>
                <Link
                  href="/home/[id]"
                  as={`/home/${home.address_full}`}
                  key={home._id}
                >
                  <HomeImage urlToImage={home.image_url} title={"home"} dimensions={{width: 900, height: 900}}/>
                  <div className="flex-col text-zinc-700">
                    <p className="font-bold">{home.price}</p>
                  </div>
                  <div className="flex flex-row text-[16px] items-center">
                    <div className="flex">
                      <Image 
                        src="https://www.trulia.com/images/icons/txl3/BedIcon.svg"
                        alt='bath icon'
                        width={20}
                        height={20}
                        className="w-3xs object-cover rounded-lg"
                      />
                      <p className="mx-2">{home.beds}bd</p>
                    </div>
                    <div className="flex">
                      <Image 
                        src="https://www.trulia.com/images/icons/txl3/BathIcon.svg"
                        alt='bath icon'
                        width={10}
                        height={10}
                        className="w-3xs object-cover rounded-lg"
                      />
                      <p className="mx-2">{home.bath}ba</p>
                    </div>
                    <div className="flex">
                      <Image 
                        src="https://www.trulia.com/images/icons/txl3/SquareFeetIcon.svg"
                        alt='bath icon'
                        width={20}
                        height={20}
                        className="w-3xs object-cover rounded-lg"
                      />
                      <p className="mx-2">{home.sqr_ft}</p>
                    </div>
                  </div>
                  <div className="flex-col">
                    <p className="">{addressTop},</p> 
                    <p className="">{addressBottom}</p> 
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="hidden md:block md:w-1/3 h-100 p-4 border rounded-lg">
            Map Container
        </div>
      </div>
    </div>
      
  );
};

export default Buy;
