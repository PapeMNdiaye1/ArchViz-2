import { React, useEffect, useState, Fragment } from "react";
import { ImageBlurhashD } from "../Image-Compona";

import ImageProjectO2 from "../../Style/Images/Project/Villa-Onomo-2.jpg";
import ImageProjectO3 from "../../Style/Images/Project/Villa-Onomo-3.jpg";
import ImageProjectO4 from "../../Style/Images/Project/Villa-Onomo-4.jpg";
import ImageProjectO5 from "../../Style/Images/Project/Villa-Onomo-5.jpg";
import ImageProjectO6 from "../../Style/Images/Project/Villa-Onomo-6.jpg";
import ImageProjectO7 from "../../Style/Images/Project/Villa-Onomo-7.jpg";
import ImageProjectO8 from "../../Style/Images/Project/Villa-Onomo-8.jpg";
import ImageProjectO9 from "../../Style/Images/Project/Villa-Onomo-9.jpg";
import ImageProjectO11 from "../../Style/Images/Project/Villa-Onomo-11.jpg";

let hashProjectC1 = "LFEoPn?bVrNG~qR-RjkCIToftS%M";

function SmallHouse1({}) {
  const [TheImageContainer, setTheImageContainer] = useState(false);
  const [TheImageInTheContainer, setTheImageInTheContainer] =
    useState(ImageProjectO5);

  useEffect(() => {
    let ToDisplayonBLoade = document.querySelector(".before-loader");
    ToDisplayonBLoade.style.display = "none";

    let Page_slider = document.querySelector(".page_title_slider");
    Page_slider.style.opacity = `0`;

    let AccueilContainer = document.querySelector(".App_container");
    AccueilContainer.scrollTop = 0;

    let hoverLoaderContainer = document.querySelector(
      ".hover_loader_container"
    );
    hoverLoaderContainer.style.display = "flex";

    setTimeout(function () {
      hoverLoaderContainer.style.display = "";
    }, 1500);

    return () => {
      Page_slider.style.opacity = `1`;
      ToDisplayonBLoade.style.display = "flex";
      AccueilContainer.scrollTop = 0;
    };
  }, []);

  const displayImage = (e) => {
    if (TheImageContainer) {
      setTheImageContainer(false);
    } else {
      setTheImageInTheContainer(e.target.getAttribute("src"));
      setTheImageContainer(true);
    }
  };

  return (
    <Fragment>
      {TheImageContainer && (
        <div className="display_image_container">
          <div>
            <div onClick={displayImage} className="close_image_container"></div>
            <img src={TheImageInTheContainer} width="100%" />
          </div>
        </div>
      )}

      <div className="Villa_Onomo_container">
        <div className="project_display">
          <h1 className="project_title">Villa Onomo</h1>
          <h3 className="project_description">By Archviz | 25 juin, 2024 |</h3>
          <p>
            Des designs Modernes et épurés. Nous mettons en œuvre différentes
            approches pour une optimisation de vos espaces extérieurs et
            intérieurs. Pour se faire nous utilisons différents logiciels avec
            les dernières innovations pour des rendus d’images à la fois
            réalistes et immersives.{" "}
          </p>
          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectO4}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="100%"
            />
          </div>
          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectO2}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectO3}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
          </div>
          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectO8}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="100%"
            />
          </div>
          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectO6}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectO7}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
          </div>
          <div className="the_video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/8U7rAw4vPnk?si=vVz91Eoz6KjQz7EK"
              title="Villa Onomo"
              allow="accelerometer; 
                            autoplay; clipboard-write;
                            encrypted-media; gyroscope;
                            picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectO9}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="100%"
            />
          </div>
          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectO5}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectO11}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SmallHouse1;
