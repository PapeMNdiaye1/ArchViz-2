import { React, useEffect, useState, Fragment } from "react";

import ImageProjectC1 from "../../Style/Images/Project/Residence_Alya-2.jpg";
import ImageProjectC2 from "../../Style/Images/Project/Residence_Alya-3.jpg";
import ImageProjectC3 from "../../Style/Images/Project/Residence_Alya-4.jpg";
import ImageProjectC4 from "../../Style/Images/Project/Residence_Alya-5.jpg";
import ImageProjectC5 from "../../Style/Images/Project/Residence_Alya-6.jpg";
import ImageProjectC6 from "../../Style/Images/Project/Residence_Alya-7.jpg";
import ImageProjectC7 from "../../Style/Images/Project/Residence_Alya-10.jpg";
import ImageProjectC8 from "../../Style/Images/Project/Residence_Alya-8.jpg";
import ImageProjectC9 from "../../Style/Images/Project/Residence_Alya-9.jpg";

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

      <div className="Villa_B_container">
        <div className="project_display">
          <h1 className="project_title">Residence Alya</h1>
          <h3 className="project_description">By Archvi | 18 Avril, 2025 |</h3>
          <p>
            Valorisez votre actif immobilier commercial avec des espaces conçus
            pour l'efficacité et l'harmonie. Un design épuré, des matériaux
            nobles et une lumière étudiée au service de la performance et du
            confort.{" "}
          </p>

          <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectC1}
              width="100%"
              loading="lazy"
            />
          </div>
          <div className="TheImageContainer">
            <img onClick={displayImage} src={ImageProjectC9} width="47%" />
            <img onClick={displayImage} src={ImageProjectC8} width="47%" />
          </div>
          <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectC2}
              width="100%"
              loading="lazy"
            />
          </div>
          <div className="TheImageContainer">
            <img onClick={displayImage} src={ImageProjectC3} width="47%" />
            <img onClick={displayImage} src={ImageProjectC4} width="47%" />
          </div>
          <div className="TheImageContainer">
            <img onClick={displayImage} src={ImageProjectC5} width="47%" />
            <img onClick={displayImage} src={ImageProjectC7} width="47%" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SmallHouse1;
