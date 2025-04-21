import { useState } from "react";
import Image from "next/image";

const SelectedHome = (props: any) => {
  const home = props?.props?.home?.[0];
  const [imageSrc, setImageSrc] = useState(home.image_3 || "/home.jpg");
  const [secondImgSrc, setSecondImgSrc] = useState(home.image_10 || "/home.jpg");
  const [thirdImgSrc, setThirdImgSrc] = useState(home.image_20 || "/home.jpg");
 
   
  return (
    <div className=" flex-row justify-self-center max-w-[992px] h-auto p-4">
      <div className="flex justify-self-center">
        <div className="grid grid-cols-4 gap-2">
          <div className="min-h-[300px] col-span-2 rounded-r-lg">
            <Image
              src={imageSrc}
              alt={home.address_full}
              width={400}
              height={300}
              className="w-lg object-cover rounded-lg"
              onError={() => {
                setImageSrc("/home.jpg");
              }}
            />
          </div>
          <Image
              src={secondImgSrc}
              alt={home.address_full}
              width={400}
              height={300}
              className="w-lg object-cover rounded-lg"
              onError={() => {
                setSecondImgSrc("/home.jpg");
              }}
            />
          <Image
              src={thirdImgSrc}
              alt={home.address_full}
              width={400}
              height={300}
              className="w-lg object-cover rounded-lg"
              onError={() => {
                setThirdImgSrc("/home.jpg");
              }}
            />
        </div>
      </div>
      <div className="flex-row justify-self-center p-4">
        <div>{home.title}</div>
        <p>{home.description}</p>
      </div>
    </div>
  );
};

export default SelectedHome;
