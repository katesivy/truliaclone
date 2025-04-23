import { useState } from "react";
import Image from "next/image";

const SelectedHome = (props: any) => {
  const home = props?.props?.home?.[0];
  const [imageSrc, setImageSrc] = useState(home.image_3 || "/home.jpg");
  const [secondImgSrc, setSecondImgSrc] = useState(home.image_10 || "/home.jpg");
  const [thirdImgSrc, setThirdImgSrc] = useState(home.image_20 || "/home.jpg");
  const addressSplit = home.address_full.split(',');
  const addressTop = addressSplit.shift();
  const addressBottom = addressSplit.join(',');
   
  return (
      <div className="flex-row justify-self-center max-w-[992px] h-auto p-4 w-2/3">
        <div className="flex justify-self-center max-h-[500px]">
          <div className="min-h-[300px] w-[992px] h-full max-h-[500px] overflow-hidden rounded-l-lg">
              <Image
                src={imageSrc}
                alt={home.address_full}
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-l-lg"
                onError={() => {
                  setImageSrc("/home.jpg");
                }}
              />
            </div>
          <div className="flex flex-col">
            <div className="ml-2 mb-1 h-full overflow-hidden">
              <Image
                  src={secondImgSrc}
                  alt={home.address_full}
                  width={400}
                  height={300}
                  className="w-lg h-full object-cover rounded-tr-lg"
                  onError={() => {
                    setSecondImgSrc("/home.jpg");
                  }}
                />
            </div>
            <div className="ml-2 mt-1 h-full overflow-hidden">
              <Image
                src={thirdImgSrc}
                alt={home.address_full}
                width={400}
                height={300}
                className="w-lg h-full object-cover rounded-br-lg"
                onError={() => {
                  setThirdImgSrc("/home.jpg");
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex-row justify-self-center p-4">
          <div>
            <h2 className="font-bold text-lg">{addressTop}</h2>
            <p>{addressBottom}</p>
          </div>
          <p>{home.description}</p>
        </div>
      </div>
  );
};

export default SelectedHome;
