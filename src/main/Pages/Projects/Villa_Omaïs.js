import { React, useEffect, useState, Fragment } from "react";
import { ImageBlurhashD } from "../Image-Compona";

import ImageProjectC1 from "../../Style/Images/Project/Villa-Omaïs-1.jpg";
import ImageProjectC2 from "../../Style/Images/Project/Villa-Omaïs-16.jpg";
import ImageProjectC3 from "../../Style/Images/Project/Villa-Omaïs-26.jpg";
import ImageProjectC4 from "../../Style/Images/Project/Villa-Omaïs-29.jpg";
import ImageProjectC11 from "../../Style/Images/Project/Villa-Omaïs-32.jpg";
import ImageProjectC5 from "../../Style/Images/Project/Villa-Omaïs-35.jpg";
import ImageProjectC6 from "../../Style/Images/Project/Villa-Omaïs-36.jpg";
import ImageProjectC7 from "../../Style/Images/Project/Villa-Omaïs-43.jpg";
import ImageProjectC8 from "../../Style/Images/Project/Villa-Omaïs-46.jpg";
import ImageProjectC9 from "../../Style/Images/Project/Villa-Omaïs-48.jpg";
import ImageProjectC10 from "../../Style/Images/Project/Villa-Omaïs-49.jpg";


let hashProjectC1 = "LGGlVE-o?w-;ITV@M|M_?dogxrRj";
let hashProjectC2 = "LGGlVE-o?w-;ITV@M|M_?dogxrRj";
let hashProjectC3 = "LGGlVE-o?w-;ITV@M|M_?dogxrRj";
let hashProjectC4 = "LGGlVE-o?w-;ITV@M|M_?dogxrRj";
let hashProjectC5 = "LGGlVE-o?w-;ITV@M|M_?dogxrRj";
let hashProjectC6 = "LGGlVE-o?w-;ITV@M|M_?dogxrRj";
let hashProjectC7 = "LGGlVE-o?w-;ITV@M|M_?dogxrRj";
let hashProjectC8 = "LGGlVE-o?w-;ITV@M|M_?dogxrRj";
let hashProjectC9 = "LGGlVE-o?w-;ITV@M|M_?dogxrRj";
let hashProjectC10 = "LGGlVE-o?w-;ITV@M|M_?dogxrRj";
let hashProjectC11 = "LGGlVE-o?w-;ITV@M|M_?dogxrRj";

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

      <div className="Villa_Omaïs_container">
        <div className="project_display">
          <h1 className="project_title">Villa Omaïs</h1>
          <h3 className="project_description">By Archviz | 03 septembre, 2026 |</h3>
          <p>
            À l'aide des logiciels de dernière génération et de notre
            savoir-faire dans le domaine de l’architecture d’intérieur. Nous
            vous aidons dans l’aménagement de vos espaces.{" "}
          </p>
          <div className="TheImageContainer">
            <ImageBlurhashD
                        onClick={displayImage}
                        src={ImageProjectC3}
                        theHash={hashProjectC3}
                        theAspectRatio="1 / 0.746"
                        theWidth="100%"
                      />
          </div>
          <div className="TheImageContainer">
              <ImageBlurhashD
                        onClick={displayImage}
                        src={ImageProjectC7}
                        theHash={hashProjectC7}
                        theAspectRatio="1 / 0.746"
                        theWidth="100%"
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
                         src={ImageProjectC4}
                         theHash={hashProjectC4}
                         theAspectRatio="1 / 0.746"
                         theWidth="47%"
                       />
          </div>
          <div className="TheImageContainer">
            <ImageBlurhashD
                        onClick={displayImage}
                        src={ImageProjectC2}
                        theHash={hashProjectC2}
                        theAspectRatio="1 / 0.746"
                        theWidth="100%"
                      />
          </div>
          <div className="TheImageContainer">
            <img
              loading="lazy"
              onClick={displayImage}
              src={ImageProjectC11}
              width="100%"
              alt=" Appartement_B_Home - 4"
            />
          </div>
            <div className="TheImageContainer">
            <img
              loading="lazy"
              onClick={displayImage}
              src={ImageProjectC5}
              width="47%"
              alt=" Appartement_B_Home - 2"
            />
            <img
              loading="lazy"
              onClick={displayImage}
              src={ImageProjectC6}
              width="47%"
              alt=" Appartement_B_Home - 3"
            />
          </div>
          <div className="TheImageContainer">
            <ImageBlurhashD
                        onClick={displayImage}
                        src={ImageProjectC8}
                        theHash={hashProjectC8}
                        theAspectRatio="1 / 0.746"
                        theWidth="100%"
                      />
          </div>
              <div className="TheImageContainer">
           <ImageBlurhashD
                         onClick={displayImage}
                         src={ImageProjectC10}
                         theHash={hashProjectC10}
                         theAspectRatio="1 / 0.746"
                         theWidth="47%"
                       />
                       <ImageBlurhashD
                         onClick={displayImage}
                         src={ImageProjectC9}
                         theHash={hashProjectC9}
                         theAspectRatio="1 / 0.746"
                         theWidth="47%"
                       />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AppartementBHome1;
