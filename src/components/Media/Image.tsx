import NextImage from "next/image";

export const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <NextImage
    loading="lazy"
    src={src}
    alt={alt}
    height={300} // Pass as a number for Next.js
    width={450}  // Pass as a number for Next.js
    className={className}
  />
);
