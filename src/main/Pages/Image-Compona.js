import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

function ImageBlurhashA({ src, theHash }) {
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
          hash={theHash}
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

function ImageBlurhashB({ src, theHash, theTitle }) {
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
          hash={theHash}
          width={"100%"}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className="image_container"
        />
      </div>
      <img
        style={{ display: !imageLoaded ? " none " : "inline" }}
        width="100%"
        src={src}
        loading="lazy"
        alt={theTitle}
        className="image_container"
      />
    </>
  );
}

export { ImageBlurhashA, ImageBlurhashB };
