import React from "react";

const breakpoints = ["700px", "1000px", "1300px"];

function generateSources({ data, type }) {
  if (!data) return null;
  return (
    <>
      {data.map((srcset, i) => (
        <source
          srcSet={srcset}
          media={`(max-width: ${breakpoints[i]})`}
          type={type}
        />
      ))}
    </>
  );
}

const Picture = ({ onLoad, src, webp, sizes }) => (
  <picture>
    {generateSources({ data: webp, type: "image/webp" })}
    {generateSources({ data: sizes })}
    <img
      style={{ position: "absolute", width: "100%", left: 0 }}
      src={src}
      onLoad={onLoad}
    />
  </picture>
);

export default Picture;
