import { React, useEffect, useState, Fragment } from "react";
import { ImageBlurhashD } from "../Image-Compona";

import ImageProjectC6 from "../../Style/Images/Project/Immeuble-Talles-9.jpg";
import ImageProjectC1 from "../../Style/Images/Project/Immeuble-Talles-10.jpg";
import ImageProjectC2 from "../../Style/Images/Project/Immeuble-Talles-11.jpg";
import ImageProjectC3 from "../../Style/Images/Project/Immeuble-Talles-12.jpg";
import ImageProjectC4 from "../../Style/Images/Project/Immeuble-Talles-13.jpg";
import ImageProjectC5 from "../../Style/Images/Project/Immeuble-Talles-14.jpg";

let hashProjectC1 = "L6Aw6it600o#?a?HIo4o00M|~Vxt";

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
      <div className="Immenble_Talles_B_container">
        <div className="project_display">
          <h1 className="project_title">Résidence MANDA</h1>
          <h3 className="project_description">
            By Archviz | 9 Novembre, 2025 |
          </h3>
          <p>
            Les plans d'étage isométriques offrent une vue en trois dimensions
            des configurations d'un bien immobilier, aidant les clients à mieux
            comprendre la disposition spatiale et la fonctionnalité des
            différentes zones.
          </p>

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
              src={ImageProjectC2}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
          </div>
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
              src={ImageProjectC6}
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
              src={ImageProjectC4}
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
