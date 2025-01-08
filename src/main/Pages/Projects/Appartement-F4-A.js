import { React, useEffect, useState, Fragment } from "react";

import ImageProjectC1 from "../../Style/Images/Project/Appartement-F4-A-1.jpg";
import ImageProjectC2 from "../../Style/Images/Project/Appartement-F4-A-2.jpg";
import ImageProjectC3 from "../../Style/Images/Project/Appartement-F4-A-3.jpg";
import ImageProjectC4 from "../../Style/Images/Project/Appartement-F4-A-4.jpg";
import ImageProjectC5 from "../../Style/Images/Project/Appartement-F4-A-5.jpg";
import ImageProjectC6 from "../../Style/Images/Project/Appartement-F4-A-6.jpg";

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
      <div className="Appartement-F4-A-container">
        <div className="project_display">
          <h1 className="project_title">Appartement Bamba Ba</h1>
          <h3 className="project_description">
            par Bokar Ndiaye | 25 Septembre, 2023 |
          </h3>
          <p>
            À l'aide des logiciels de dernière génération et de notre
            savoir-faire dans le domaine de l’architecture d’intérieur. Nous
            vous aidons dans l’aménagement de vos espaces.
          </p>
          <a
            className="the_links"
            href="https://archviz-villa-bamba-ba.netlify.app/"
            target="_blank"
          >
            Experience VR/AR <ion-icon name="arrow-forward-outline"></ion-icon>
          </a>
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
              src={ImageProjectC2}
              width="47%"
              alt="  Façade Immeuble - 3"
            />
            <img
              onClick={displayImage}
              src={ImageProjectC4}
              width="47%"
              alt="  Façade Immeuble - 6"
            />
          </div>
          <h2 className="project_title">Animation</h2>
          <div className="the_video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/9k5F-2JcGGc?si=Ebm9pqsFUwCJJvEU"
              title="Interior Design"
              allow="accelerometer; 
                            autoplay; clipboard-write;
                            encrypted-media; gyroscope;
                            picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectC5}
              width="100%"
              alt="  Façade Immeuble - 1"
            />
          </div>
          <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectC6}
              width="100%"
              alt="  Façade Immeuble - 5"
            />
          </div>

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
