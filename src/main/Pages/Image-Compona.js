import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

export default function ImageBlurhash({ src }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  //   console.log(imageLoaded);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      //   console.log(imageLoaded);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      <div
        style={{
          display: imageLoaded ? " none " : "inline",
          width: "100%",
          height: "100%",
        }}
      >
        <Blurhash
          hash="LLNKFy00?bt7~q%MWBWB-;t7j[M{"
          width={"100%"}
          height={"100%"}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img
        style={{ display: !imageLoaded ? " none " : "inline" }}
        src={src}
        alt=""
        loading="lazy"
      />
    </>
  );
}
