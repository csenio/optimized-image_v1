import React, { useState, useRef } from "react";
import Picture from "./Picture";
import useIntersectionObserver from "./useIntersectionObserver";

const Img = ({ placeholder, src, sizes, webp, name }) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const containerRef = useRef();
  useIntersectionObserver({
    ref: containerRef,
    onViewportEnter: () => {
      setIsInView(true);
      console.log("loaded", name);
    }
  });

  return (
    <div
      className={name}
      ref={containerRef}
      style={{
        position: `relative`,
        width: "80%"
      }}
    >
      {placeholder && (
        <img
          src={placeholder}
          style={{
            position: "relative",
            width: "100%",
            zIndex: 1,
            opacity: isLoaded ? 0 : 1,
            transition: "opacity 0.3s"
          }}
        />
      )}

      {isInView && (
        <Picture
          onLoad={() => setIsLoaded(true)}
          src={src}
          sizes={sizes}
          webp={webp}
        />
      )}
    </div>
  );
};

export default Img;
