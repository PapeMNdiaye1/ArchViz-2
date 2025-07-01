import { React, useEffect, useState, Fragment } from "react";

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
          <h3 className="project_description">By Archvi | 12 Juin, 2024 |</h3>
          <p>
            Visualisez votre bureau avant de le construire. La modélisation 3D
            vous permet d'explorer les agencements, le placement des meubles et
            les éléments de design, le tout virtuellement.
          </p>
          <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectBB1}
              width="100%"
              alt=" Maquette de la Grande Mosquée de Touba - 1"
            />
          </div>

          <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectBB2}
              width="47%"
              alt="Interior Decoration - 1"
            />
            <img
              onClick={displayImage}
              src={ImageProjectBB3}
              width="47%"
              alt="Interior Decoration - 2"
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
            <img
              onClick={displayImage}
              src={ImageProjectBB5}
              width="47%"
              alt="Interior Decoration - 1"
            />
            <img
              onClick={displayImage}
              src={ImageProjectBB6}
              width="47%"
              alt="Interior Decoration - 2"
            />
          </div>
          <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectBB7}
              width="100%"
              alt=" Maquette de la Grande Mosquée de Touba - 3"
            />
          </div>
          <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectBB8}
              width="47%"
              alt="Interior Decoration - 1"
            />
            <img
              onClick={displayImage}
              src={ImageProjectBB9}
              width="47%"
              alt="Interior Decoration - 2"
            />
          </div>
          <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectBB4}
              width="100%"
              alt=" Maquette de la Grande Mosquée de Touba - 3"
            />
          </div>
          <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectBB11}
              width="47%"
              alt=" Maquette de la Grande Mosquée de Touba - 3"
            />
            <img
              onClick={displayImage}
              src={ImageProjectBB10}
              width="47%"
              alt=" Maquette de la Grande Mosquée de Touba - 2"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Touba;
