import { React, useEffect, useState, Fragment } from "react";

import ImageProjectC1 from "../../Style/Images/Project/Appartement_B_Home_1.jpg";
import ImageProjectC2 from "../../Style/Images/Project/Appartement_B_Home_2.jpg";
import ImageProjectC3 from "../../Style/Images/Project/Appartement_B_Home_3.jpg";
import ImageProjectC4 from "../../Style/Images/Project/Appartement_B_Home_4.jpg";
import ImageProjectC5 from "../../Style/Images/Project/Appartement_B_Home_5.jpg";

function AppartementBHome1({}) {
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

      <div className="AppartementBHome_1_container">
        <div className="project_display">
          <h1 className="project_title">Appartement_B_Home_1</h1>
          <h3 className="project_description">
            par Pape Momar Ndiaye | 03 Mars, 2024 |
          </h3>
          <p>
            À l'aide des logiciels de dernière génération et de notre
            savoir-faire dans le domaine de l’architecture d’intérieur. Nous
            vous aidons dans l’aménagement de vos espaces.{" "}
          </p>
          <div className="TheImageContainer">
            <img
              loading="lazy"
              onClick={displayImage}
              src={ImageProjectC1}
              width="100%"
              alt=" Appartement_B_Home - 1"
            />
          </div>
          <div className="TheImageContainer">
            <img
              loading="lazy"
              onClick={displayImage}
              src={ImageProjectC4}
              width="47%"
              alt=" Appartement_B_Home - 2"
            />
            <img
              loading="lazy"
              onClick={displayImage}
              src={ImageProjectC3}
              width="47%"
              alt=" Appartement_B_Home - 3"
            />
          </div>
          <div className="TheImageContainer">
            <img
              loading="lazy"
              onClick={displayImage}
              src={ImageProjectC2}
              width="100%"
              alt=" Appartement_B_Home - 4"
            />
          </div>
          <div className="TheImageContainer">
            <img
              loading="lazy"
              onClick={displayImage}
              src={ImageProjectC5}
              width="100%"
              alt=" Appartement_B_Home - 4"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AppartementBHome1;
