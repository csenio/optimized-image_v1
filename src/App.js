import React from "react";
import Image from "./Image";

const commonProps = {
  placeholder:
    "https://res.cloudinary.com/idemo/image/upload/w_300/e_blur:1000/sofa_cat.jpg",
  src: "https://res.cloudinary.com/idemo/image/upload/w_2000/sofa_cat.jpg",
  sizes: [
    "https://res.cloudinary.com/idemo/image/upload/w_200/sofa_cat.jpg",
    "https://res.cloudinary.com/idemo/image/upload/w_600/sofa_cat.jpg",
    "https://res.cloudinary.com/idemo/image/upload/w_800/sofa_cat.jpg"
  ],
  webp: [
    "https://res.cloudinary.com/idemo/image/upload/w_200/sofa_cat.webp",
    "https://res.cloudinary.com/idemo/image/upload/w_600/sofa_cat.webp",
    "https://res.cloudinary.com/idemo/image/upload/w_800/sofa_cat.webp"
  ]
};

export default function App() {
  return (
    <div className="App">
      <Image name="img-1" {...commonProps} />
      <Image name="img-2" {...commonProps} />
      <Image name="img-3" {...commonProps} />
      <Image name="img-4" {...commonProps} />
    </div>
  );
}
