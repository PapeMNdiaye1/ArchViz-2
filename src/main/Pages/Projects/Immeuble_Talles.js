import { React, useEffect, useState, Fragment } from "react";
import { ImageBlurhashD } from "../Image-Compona";

import ImageProjectC1 from "../../Style/Images/Project/Immeuble-Talles-1.jpg";
import ImageProjectC2 from "../../Style/Images/Project/Immeuble-Talles-2.jpg";
import ImageProjectC3 from "../../Style/Images/Project/Immeuble-Talles-3.jpg";
import ImageProjectC4 from "../../Style/Images/Project/Immeuble-Talles-4.jpg";
import ImageProjectC5 from "../../Style/Images/Project/Immeuble-Talles-5.jpg";
import ImageProjectC6 from "../../Style/Images/Project/Immeuble-Talles-6.jpg";
import ImageProjectC7 from "../../Style/Images/Project/Immeuble-Talles-7.jpg";
import ImageProjectC8 from "../../Style/Images/Project/Immeuble-Talles-8.jpg";

let hashProjectC1 = "L4DcRA?b0001D*_3WB4n00of~pRj";

function ImmeubleTalles({}) {
  const [TheImageContainer, setTheImageContainer] = useState(false);
  const [TheImageInTheContainer, setTheImageInTheContainer] =
    useState(ImageProjectC6);

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

      <div className="Immeuble-Talles">
        <div className="project_display">
          <h1 className="project_title">Résidence Pierre de Lune</h1>
          <h3 className="project_description">By Archviz | 3 Juin, 2024 |</h3>
          <p>
            Les plans d'étage isométriques offrent une vue en trois dimensions
            des configurations d'un bien immobilier, aidant les clients à mieux
            comprendre la disposition spatiale et la fonctionnalité des
            différentes zones.{" "}
          </p>

          {/* <a className='the_links' href='https://papemndiaye1.github.io/ArchViz_Interior_Design_1/' target="_blank">
                        Experience VR/AR <ion-icon name="arrow-forward-outline"></ion-icon>
                    </a> */}

          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC1}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC2}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
          </div>
          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC7}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC8}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
          </div>
          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC3}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC4}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
          </div>
          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC5}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectC6}
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
export default ImmeubleTalles;
