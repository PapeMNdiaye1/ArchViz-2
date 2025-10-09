import { React, useEffect, useState, Fragment } from "react";
import { ImageBlurhashD } from "../Image-Compona";

import ImageProjectC1 from "../../Style/Images/Project/Villa_Ndayane-1.jpg";
import ImageProjectC2 from "../../Style/Images/Project/Villa_Ndayane-2.jpg";
import ImageProjectC3 from "../../Style/Images/Project/Villa_Ndayane-3.jpg";
import ImageProjectC4 from "../../Style/Images/Project/Villa_Ndayane-4.jpg";
import ImageProjectC5 from "../../Style/Images/Project/Villa_Ndayane-5.jpg";
import ImageProjectC6 from "../../Style/Images/Project/Villa_Ndayane-6.jpg";
import ImageProjectC7 from "../../Style/Images/Project/Villa_Ndayane-7.jpg";
import ImageProjectC8 from "../../Style/Images/Project/Villa_Ndayane-8.jpg";
import ImageProjectC9 from "../../Style/Images/Project/Villa_Ndayane-9.jpg";
import ImageProjectC10 from "../../Style/Images/Project/Villa_Ndayane-10.jpg";
import ImageProjectC11 from "../../Style/Images/Project/Villa_Ndayane-11.jpg";

let hashProjectC1 = "LOIO-2D%ITxu%MohD$xu?wa^IAR%";

function SmallHouse1({}) {
  const [TheImageContainer, setTheImageContainer] = useState(false);
  const [TheImageInTheContainer, setTheImageInTheContainer] =
    useState(ImageProjectC1);

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

      <div className="Villa_A_container">
        <div className="project_display">
          <h1 className="project_title">Villa Ndayane</h1>
          <h3 className="project_description">By Archviz | 4 Mai, 2023 |</h3>
          <p>
            Des designs Modernes et épurés. Nous mettons en œuvre différentes
            approches pour une optimisation de vos espaces extérieurs et
            intérieurs. Pour se faire nous utilisons différents logiciels avec
            les dernières innovations pour des rendus d’images à la fois
            réalistes et immersives.
          </p>

          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC1}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="100%"
            />
          </div>
          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC4}
              theHash={hashProjectC1}
              theAspectRatio="1 / 1.24"
              theWidth="47%"
            />
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC5}
              theHash={hashProjectC1}
              theAspectRatio="1 / 1.24"
              theWidth="47%"
            />
          </div>
          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC2}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="100%"
            />
          </div>
          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC6}
              theHash={hashProjectC1}
              theAspectRatio="1 / 1.24"
              theWidth="47%"
            />
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC7}
              theHash={hashProjectC1}
              theAspectRatio="1 / 1.24"
              theWidth="47%"
            />
          </div>
          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC3}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="100%"
            />
          </div>
          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC8}
              theHash={hashProjectC1}
              theAspectRatio="1 / 1.24"
              theWidth="47%"
            />
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC9}
              theHash={hashProjectC1}
              theAspectRatio="1 / 1.24"
              theWidth="47%"
            />
          </div>

          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC10}
              theHash={hashProjectC1}
              theAspectRatio="1 / 1.24"
              theWidth="47%"
            />
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC11}
              theHash={hashProjectC1}
              theAspectRatio="1 / 1.24"
              theWidth="47%"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SmallHouse1;
