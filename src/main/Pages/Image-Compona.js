import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

function ImageBlurhashA({ src, theHash }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      <div
        style={{
          display: imageLoaded ? " none " : "inline",
          width: "100%",
          // aspectRatio: "1 / 0.746",
          // height: "100%",
          height: "70vh",
          // background: "red",
          // border: "0.1em solid red",
        }}
        className="The-Slider-Image-Container-blur"
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
          aspectRatio: "1 / 0.746",
          borderRadius: "1em",
          overflow: "hidden",
        }}
        className="image_container"
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
        width="100%"
        src={src}
        loading="lazy"
        alt={theTitle}
        className="image_container"
      />
    </>
  );
}
function ImageBlurhashC({ src, theHash, theTitle }) {
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
          transform: "scale(0.94)",
          borderRadius: "1em",
        }}
        className="img-in-galerie-element"
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
        width="100%"
        src={src}
        loading="lazy"
        alt={theTitle}
        className="img-in-galerie-element"
      />
    </>
  );
}

function ImageBlurhashD({ src, theAspectRatio, theWidth, theHash, onClick }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  const displayImage = (e) => {
    onClick(e);
  };

  return (
    <>
      <div
        style={{
          display: imageLoaded ? " none " : "inline",
          width: theWidth,
          aspectRatio: theAspectRatio,
          borderRadius: "1em",
          overflow: "hidden",
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
        onClick={displayImage}
        style={{ display: !imageLoaded ? " none " : "inline" }}
        src={src}
        alt="ArchViz-Dakar-Image"
        loading="lazy"
        width={theWidth}
      />
    </>
  );
}

export { ImageBlurhashA, ImageBlurhashB, ImageBlurhashC, ImageBlurhashD };
