import { React, useEffect, useState, Fragment } from "react";

import ImageProjectC1 from "../../Style/Images/Project/City-1.jpg";
import ImageProjectC2 from "../../Style/Images/Project/City-2.jpg";
import ImageProjectC3 from "../../Style/Images/Project/City-3.jpg";
import ImageProjectC4 from "../../Style/Images/Project/City-4.jpg";
import ImageProjectC5 from "../../Style/Images/Project/City-5.jpg";
import ImageProjectC6 from "../../Style/Images/Project/City-6.jpg";
import ImageProjectC7 from "../../Style/Images/Project/City-7.jpg";
import ImageProjectC8 from "../../Style/Images/Project/City-8.jpg";
import ImageProjectC9 from "../../Style/Images/Project/City-9.jpg";

function City1({}) {
  const [TheImageContainer, setTheImageContainer] = useState(false);
  const [TheImageInTheContainer, setTheImageInTheContainer] =
    useState(ImageProjectC1);

  useEffect(() => {
    let ToDisplayonBLoade = document.querySelector(".before-loader");
    ToDisplayonBLoade.style.display = "none";

    let hoverLoaderContainer = document.querySelector(
      ".hover_loader_container"
    );
    hoverLoaderContainer.style.display = "flex";

    let Page_slider = document.querySelector(".page_title_slider");
    Page_slider.style.opacity = `0`;

    let AccueilContainer = document.querySelector(".App_container");
    AccueilContainer.scrollTop = 0;

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
            <img src={TheImageInTheContainer} width="100%" loading="lazy" />
          </div>
        </div>
      )}
      <div className="Immeuble_1_container">
        <div className="project_display">
          <h1 className="project_title">Cité El Hadj Amadou Ba</h1>
          <h3 className="project_description">By Archviz | 12 Juin, 2023 |</h3>
          <p>
            Ce projet comprend des villas familiales, des bâtiments commerciaux
            et résidentiels ainsi que des lieux publics. Notre travail se
            partage à parts égales entre les animations architecturales et les
            rendus 3D. Nous mettons en œuvre différentes approches pour une
            optimisation de vos espaces extérieurs et intérieurs.
          </p>
          <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectC9}
              width="100%"
              alt="Villa Onomo - 9"
              loading="lazy"
            />
          </div>
          <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectC5}
              width="47%"
              alt="Villa Onomo - 5"
              loading="lazy"
            />
            <img
              onClick={displayImage}
              src={ImageProjectC6}
              width="47%"
              alt="Villa Onomo - 6"
              loading="lazy"
            />
          </div>
          <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectC2}
              width="100%"
              alt="Villa Onomo - 2"
              loading="lazy"
            />
          </div>
          <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectC3}
              width="47%"
              alt="Villa Onomo - 3"
              loading="lazy"
            />
            <img
              onClick={displayImage}
              src={ImageProjectC4}
              width="47%"
              alt="Villa Onomo - 4"
              loading="lazy"
            />
          </div>
          <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectC1}
              width="100%"
              alt="Villa Onomo - 1"
              loading="lazy"
            />
          </div>
          <div className="the_video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ma46LJUQBNA"
              title=" Cité El Hadj Amadou Ba"
              allow="accelerometer; 
                            autoplay; clipboard-write;
                            encrypted-media; gyroscope;
                            picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="the_video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/2b3wtwBInrs"
              title="Présentation Cité El Hadj Amadou Ba"
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
              src={ImageProjectC7}
              width="47%"
              alt="Villa Onomo - 7"
              loading="lazy"
            />
            <img
              onClick={displayImage}
              src={ImageProjectC8}
              width="47%"
              alt="Villa Onomo - 8"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default City1;
