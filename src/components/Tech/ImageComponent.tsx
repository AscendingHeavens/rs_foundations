import * as React from "react";

interface ImageComponentProps {
  imgSrc: string;
  imgAlt: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ imgSrc, imgAlt }) => (
  <img
    loading="lazy"
    src={imgSrc}
    alt={imgAlt}
    className="object-contain grow w-full aspect-[0.92] max-md:mt-10 max-md:max-w-full"
  />
);

export default ImageComponent;