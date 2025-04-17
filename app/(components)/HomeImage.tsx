import { useState } from "react";
import Image from "next/image";

export function HomeImage({
  urlToImage,
  title,
}: {
  urlToImage: string | null;
  title: string;
}) {
  const [imageSrc, setImageSrc] = useState(urlToImage || "/home.jpg");

  return (
    <Image
      src={imageSrc}
      alt={title}
      width={400}
      height={300}
      className="w-lg object-cover rounded-lg"
      onError={() => {
        setImageSrc("/home.jpg");
      }}
    />
  );
}
