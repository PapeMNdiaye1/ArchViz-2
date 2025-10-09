import { React, useEffect, useState, Fragment } from "react";
import { ImageBlurhashD } from "../Image-Compona";

import ImageProjectBB1 from "../../Style/Images/Project/Office-B-1.jpg";
import ImageProjectBB2 from "../../Style/Images/Project/Office-B-2.jpg";
import ImageProjectBB3 from "../../Style/Images/Project/Office-B-3.jpg";
import ImageProjectBB4 from "../../Style/Images/Project/Office-B-4.jpg";
import ImageProjectBB5 from "../../Style/Images/Project/Office-B-5.jpg";
import ImageProjectBB6 from "../../Style/Images/Project/Office-B-6.jpg";
import ImageProjectBB7 from "../../Style/Images/Project/Office-B-7.jpg";
import ImageProjectBB8 from "../../Style/Images/Project/Office-B-8.jpg";
import ImageProjectBB9 from "../../Style/Images/Project/Office-B-9.jpg";
import ImageProjectBB10 from "../../Style/Images/Project/Office-B-10.jpg";
import ImageProjectBB11 from "../../Style/Images/Project/Office-B-11.jpg";

let hashProjectC1 = "LHH2ZrbVIVxtX1RQR%RQ~WM{NIV?";
let hashProjectC2 = "LRKdJ4WE%1tRE2WBM|V@~Vj[E2j?";
let hashProjectC3 = "LRIXy[4-tQ%MNGkCRjRj~Vbc%1xt";

function Touba({}) {
  const [TheImageContainer, setTheImageContainer] = useState(false);
  const [TheImageInTheContainer, setTheImageInTheContainer] =
    useState(ImageProjectBB1);

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

      <div className="Touba_1_container">
        <div className="project_display">
          <h1 className="project_title">Design Bureau</h1>
          <h3 className="project_description">By Archviz | 12 Juin, 2024 |</h3>
          <p>
            Visualisez votre bureau avant de le construire. La modélisation 3D
            vous permet d'explorer les agencements, le placement des meubles et
            les éléments de design, le tout virtuellement.
          </p>

          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectBB1}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="100%"
            />
          </div>

          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectBB2}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectBB3}
              theHash={hashProjectC1}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
          </div>

          <div className="the_video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/7CKVt6z330s?si=VtZ4SSG-E3GFGJ5w"
              title="Design Bureau"
              allow="accelerometer;
                            autoplay; clipboard-write;
                            encrypted-media; gyroscope;
                            picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="TheImageContainer"></div>

          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectBB5}
              theHash={hashProjectC2}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectBB6}
              theHash={hashProjectC2}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
          </div>
          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectBB7}
              theHash={hashProjectC3}
              theAspectRatio="1 / 0.746"
              theWidth="100%"
            />
          </div>
          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectBB8}
              theHash={hashProjectC3}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectBB9}
              theHash={hashProjectC3}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
          </div>
          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectBB4}
              theHash={hashProjectC2}
              theAspectRatio="1 / 0.746"
              theWidth="100%"
            />
          </div>
          <div className="TheImageContainer">
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectBB11}
              theHash={hashProjectC3}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
            <ImageBlurhashD
              onClick={displayImage}
              src={ImageProjectBB10}
              theHash={hashProjectC3}
              theAspectRatio="1 / 0.746"
              theWidth="47%"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Touba;
