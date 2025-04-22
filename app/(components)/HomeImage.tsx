import { useState } from "react";
import Image from "next/image";

export function HomeImage({
  urlToImage,
  alt,
  dimensions
}: {
  urlToImage: string | null;
  alt: string;
  dimensions: {
    height: number,
    width: number
  }
}) {
  const [imageSrc, setImageSrc] = useState(urlToImage || "/home.jpg");

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={dimensions.height}
      height={dimensions.width}
      className="w-lg object-cover rounded-lg"
      onError={() => {
        setImageSrc("/home.jpg");
      }}
    />
  );
}
