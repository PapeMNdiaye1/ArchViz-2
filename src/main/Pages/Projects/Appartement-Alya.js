import { React, useEffect, useState, Fragment } from "react";

import ImageProjectC1 from "../../Style/Images/Project/Appartement-Alya-1.jpg";
import ImageProjectC2 from "../../Style/Images/Project/Appartement-Alya-2.jpg";
import ImageProjectC3 from "../../Style/Images/Project/Appartement-Alya-3.jpg";
import ImageProjectC4 from "../../Style/Images/Project/Appartement-Alya-4.jpg";
import ImageProjectC5 from "../../Style/Images/Project/Appartement-Alya-5.jpg";
import ImageProjectC6 from "../../Style/Images/Project/Appartement-Alya-6.jpg";
import { ImageBlurhashD } from "../Image-Compona";

let hashProjectC1 = "LGGlVE-o?w-;ITV@M|M_?dogxrRj";
let hashProjectC2 = "LGGlVE-o?w-;ITV@M|M_?dogxrRj";
let hashProjectC3 = "LGGlVE-o?w-;ITV@M|M_?dogxrRj";
let hashProjectC4 = "LGGlVE-o?w-;ITV@M|M_?dogxrRj";
let hashProjectC5 = "LGGlVE-o?w-;ITV@M|M_?dogxrRj";
let hashProjectC6 = "LGGlVE-o?w-;ITV@M|M_?dogxrRj";

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
      <div className="Appartement-Alya">
        <div className="project_display">
          <h1 className="project_title">Appartement Alya</h1>
          <h3 className="project_description">
            By Archviz | 22 Janvier, 2025 |
          </h3>
          <p>
            Notre équipe d'experts vous accompagne de A à Z pour créer un espace
            qui vous ressemble, adapté à votre mode de vie et à vos envies.
          </p>
          <a
            className="the_links"
            href="https://residence-Alya-f4-pm.netlify.app/"
            target="_blank"
          >
            Experience VR/AR <ion-icon name="arrow-forward-outline"></ion-icon>
          </a>
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
              src={ImageProjectC2}
              theHash={hashProjectC2}
              theAspectRatio=".5 / 1"
              theWidth="47%"
            />
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC3}
              theHash={hashProjectC3}
              theAspectRatio=".5 / 1"
              theWidth="47%"
            />
          </div>
          {/* <h2 className="project_title">Création</h2> */}
          <div className="the_video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/fnwEZOKK404?si=WrNeQGtULyex18_E"
              title="Appartement-Alya"
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
              src={ImageProjectC5}
              theHash={hashProjectC5}
              theAspectRatio=".5 / 1"
              theWidth="47%"
            />
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC6}
              theHash={hashProjectC6}
              theAspectRatio=".5 / 1"
              theWidth="47%"
            />
          </div>
          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC4}
              theHash={hashProjectC4}
              theAspectRatio="1 / 0.746"
              theWidth="100%"
            />
          </div>

          <div id="VR-viewer-container">
            <iframe
              src="https://residence-Alya-f4-pm.netlify.app/"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SmallHouse1;
