import { React, useEffect, useState, Fragment } from "react";

import ImageProjectC1 from "../../Style/Images/Project/Façade-Immeuble-A-1.jpg";
import ImageProjectC3 from "../../Style/Images/Project/Façade-Immeuble-A-3.jpg";
import ImageProjectC2 from "../../Style/Images/Project/Façade-Immeuble-A-2.jpg";
import ImageProjectC4 from "../../Style/Images/Project/Façade-Immeuble-A-4.jpg";
import ImageProjectC5 from "../../Style/Images/Project/Façade-Immeuble-A-5.jpg";
function Façade_Immeuble({}) {
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

      <div className="Façade_Immeuble_container">
        <div className="project_display">
          <h1 className="project_title">Façade Immeuble</h1>
          <h3 className="project_description">
            By Archviz | 12 Décembre, 2024 |
          </h3>
          <p>
            Grâce à l’utilisation des logiciels de pointe et à notre expertise
            en architecture, nous vous accompagnons dans la conception et la
            réalisation du design de façade de vos espaces.{" "}
          </p>
          <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectC1}
              width="100%"
              alt="  Façade Immeuble - 2"
            />
          </div>
          <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectC5}
              width="47%"
              alt="  Façade Immeuble - 1"
            />

            <img
              onClick={displayImage}
              src={ImageProjectC4}
              width="47%"
              alt="  Façade Immeuble - 4"
            />
          </div>
          <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectC2}
              width="100%"
              alt="  Façade Immeuble - 3"
            />
          </div>
          <h3 className="project_title">Clay Renders</h3>
          <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectC3}
              width="100%"
              alt="  Façade Immeuble - 4"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Façade_Immeuble;
