import { React, useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ImageBlurhashA } from "./Image-Compona";
import { ImageBlurhashB } from "./Image-Compona";
import { ImageBlurhashC } from "./Image-Compona";

import ImageforIntro1 from "../Style/Images/Project/Exterior-0.jpg";
import ImageforIntro4 from "../Style/Images/Project/Pharmacie-3.jpg";

import ImageProjectB1 from "../Style/Images/Project/City-8.jpg";
import ImageProjectB2 from "../Style/Images/Project/City-1.jpg";
import ImageProjectB9 from "../Style/Images/Project/City-9.jpg";

import ImageProjectI3 from "../Style/Images/Project/Residence_Alya-4.jpg";
import ImageProjectI4 from "../Style/Images/Project/Residence_Alya-2.jpg";

import ImageProjectK1 from "../Style/Images/Project/Pharmacie_C-1.jpg";

import ImageProjectL1 from "../Style/Images/Project/Immeuble-Talles-9.jpg";
import ImageProjectL2 from "../Style/Images/Project/Immeuble-Talles-11.jpg";

import ImageProjectH1 from "../Style/Images/Project/Villa_Ndayane-1.jpg";
import ImageProjectJ1 from "../Style/Images/Project/Appartement-F4-A-1.jpg";

import ImageProjectS3 from "../Style/Images/Project/Villa_Samb-3.jpg";
import ImageProjectS4 from "../Style/Images/Project/Villa_Samb-4.jpg";

import ImageProjectS7 from "../Style/Images/Project/Villa_Samb-7.jpg";
import ImageProjectS10 from "../Style/Images/Project/Villa_Samb-8.jpg";

import ImageProjectT2 from "../Style/Images/Project/Villa-Onomo-2.jpg";
import ImageProjectT4 from "../Style/Images/Project/Villa-Onomo-4.jpg";
import ImageProjectT7 from "../Style/Images/Project/Villa-Onomo-7.jpg";
import ImageProjectT8 from "../Style/Images/Project/Villa-Onomo-8.jpg";
import ImageProjectT9 from "../Style/Images/Project/Villa-Onomo-9.jpg";

import ImageProjectP1 from "../Style/Images/Project/Immeuble-Talles-6.jpg";

import ImageProjectBB1 from "../Style/Images/Project/Office-B-1.jpg";
import ImageProjectBB2 from "../Style/Images/Project/Office-B-2.jpg";
import ImageProjectBB3 from "../Style/Images/Project/Office-B-3.jpg";
import ImageProjectBB6 from "../Style/Images/Project/Office-B-6.jpg";

import ImageProjectQ1 from "../Style/Images/Project/Villa-Sarr-1.jpg";
import ImageProjectQ10 from "../Style/Images/Project/Villa-Sarr-10.jpg";

import ImageProjectR1 from "../Style/Images/Project/Façade-Immeuble-A-5.jpg";
import ImageProjectR2 from "../Style/Images/Project/Façade-Immeuble-A-4.jpg";

import ImageProjectS2 from "../Style/Images/Project/Appartement-Alya-4.jpg";

// ######################################################################################
// ######################################################################################
// ######################################################################################
// ######################################################################################
let hashIntro1 = "LLNKFy00?bt7~q%MWBWB-;t7j[M{";
let hashProjectB1 = "LjIOtoobWBog_NoJRjad.9t8axa|";
let hashProjectB2 = "LGGlVE-o?w-;ITV@M|M_?dogxrRj";
let hashProjectB9 = "LaLO4u-:4mRj~qogIUoff,ofxut7";

let hashProjectI2 = "LaLO4u-:4mRj~qogIUoff,ofxut7";
let hashProjectI3 = "LbNmvT?b%Mt7~qWBNGWB-;aeRjt7";
let hashProjectI4 = "LcIF6;RjWUt7~qkBahof%gaxWBof";

let hashProjectK1 = "LAEL]G^*00NFJX?b$#D*_MX8D*%L";

let hashProjectL1 = "LOIi5+bxoz9E_4%gR%V@AJt7eme.";
let hashProjectL2 = "LBKL5W8w9tMx=YKP~WIo58$yE1ng";

let hashProjectH1 = "L9DJVJ00kD~qM|x]Rjx]?w9EIU-;";

let hashProjectJ1 = "LNK-d[xu_4Di~qRjWBofM{t7RPt7";

let hashProjectS3 = "L6JkZR~A0000NGn,ad-:yE_NE1D%";
let hashProjectS4 = "LCMtK$D%X9_4~pRjt6RjRjxuWBIU";
let hashProjectS7 = "LFG8=tS$%g_3?H%MITM{_NV@ofkC";
let hashProjectS10 = "LFEoPn?bVrNG~qR-RjkCIToftS%M";

let hashProjectT2 = "LGIha400%gsl~q%M4n%M_Nn#V?oz";
let hashProjectT4 = "LfKK$o_4x]xuxuIVadR*%MRjM{oe";
let hashProjectT7 = "LSIOX@I9_NRitSRjM{ay-:xvWAoz";
let hashProjectT8 = "LMKBOC?aR%Ri%3obIUfR_4IUadRi";
let hashProjectT9 = "LRJRUAafI9tR~qRPROog%ObJkCRj";

let hashProjectP1 = "L7ECtVMy00tR~q-;M{9F00IU-;WB";

let hashProjectBB1 = "LIFrn#-n_NtREKWZWZRj?a-=t7t7";
let hashProjectBB2 = "LHG+OEbVM{tQX1RQR%RQ~WM|NIV?";
let hashProjectBB3 = "LFH_f6DO-;xuMv_ND*M{?vMdtRoz";
let hashProjectBB6 = "LOIN:K~q9wRjRjM{xZt7?FROD*jY";

let hashProjectQ1 = "LaJ8nv%MR%ogXpR*Woog%%ofj]j[";
let hashProjectQ10 = "LJKUWbj[xv%2~qt7WBWB?bt7RjM{";

let hashProjectR1 = "LAB:W=%2tQRj~qR+%Mxb?ct7NK-p";
let hashProjectR2 = "LCAvwdxZ58M|~Vn~I@R+t8t6ofkC";

let hashProjectS2 = "LII=0]_4%h9FIARiIpoe%Mxuxtt7";
let hashProjectZ1 = "L6Aw6it600o#?a?HIo4o00M|~Vxt";

// ######################################################################################
function Accueil({ GetImageToApp }) {
  useEffect(() => {
    let ToDisplayonBLoade = document.querySelector(".before-loader");
    ToDisplayonBLoade.style.display = "none";

    let AccueilContainer = document.querySelector(".App_container");
    AccueilContainer.scrollTop = 0;

    let Page_slider = document.querySelector(".page_title_slider");
    Page_slider.style.top = `-0%`;

    let hoverLoaderContainer = document.querySelector(
      ".hover_loader_container"
    );
    hoverLoaderContainer.style.display = "flex";

    setTimeout(function () {
      hoverLoaderContainer.style.display = "";
    }, 1500);

    let TheFooter = document.querySelector(".the_footer");
    TheFooter.style.opacity = "1";

    let ThesliderImg = document.querySelectorAll(".slider");
    let thePageWidth = window.innerWidth;

    return () => {
      ToDisplayonBLoade.style.display = "flex";
      AccueilContainer.scrollTop = 0;
    };
  }, []);

  const GetImageOnApp = (theimage, title, date, link) => {
    GetImageToApp(theimage, title, date, link);
  };

  return (
    <div id="Accueil">
      <div className="Accueil_Slider-2">
        <Carousel>
          <div className="sliders">
            <ImageBlurhashA src={ImageforIntro1} theHash={hashIntro1} />
            <div className="sliders_inner_container">
              <div
                style={{
                  color: "#000",
                }}
                className="slider_title"
              >
                <p>Visualisations 3D "Rendus Images & Animations"</p>
              </div>
              <div
                style={{
                  color: "#000",
                }}
                className="slider_date"
              >
                Sénégal, Dakar
              </div>
            </div>
          </div>
          <div className="sliders">
            <ImageBlurhashA src={ImageProjectP1} theHash={hashProjectP1} />
            <div className="sliders_inner_container">
              <div className="slider_title">
                <p>Création De Plants et Maquettes</p>
              </div>
              <div className="slider_date">Sénégal, Dakar</div>
            </div>
          </div>
          <div loading="lazy" className="sliders">
            <ImageBlurhashA src={ImageProjectJ1} theHash={hashProjectJ1} />

            <div className="sliders_inner_container">
              <div className="slider_title">
                <p>Réalité Virtuel & Experience 3D Web</p>
              </div>
              <div className="slider_date">Sénégal, Dakar</div>
            </div>
          </div>
          <div loading="lazy" className="sliders">
            <ImageBlurhashA src={ImageforIntro4} theHash={hashProjectI4} />

            <div className="sliders_inner_container">
              <div className="slider_title">
                <p>Visualisations Architecturals Pour Commerces</p>
              </div>
              <div className="slider_date">Sénégal, Dakar</div>
            </div>
          </div>
        </Carousel>
      </div>

      <section className="archviz_presantation">
        <h2 className="qui_somme_nous">Qui sommes-nous ?</h2>
        <p>
          ArchViz est un studio de visualisation architecturale spécialisé dans
          la création d'images et d'animations photoréalistes pour la mise en
          avant de projets immobiliers.
        </p>
        <div className="network_container">
          <a href="https://www.instagram.com/archviz_dakar/" target="_blank">
            <div className="network">
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/company/archviz-dakar/"
            target="_blank"
          >
            <div className="network">
              <ion-icon name="logo-linkedin"></ion-icon>
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=221777278655&text=Message provenant de archviz-dakar.com"
            target="_blank"
          >
            <div className="network">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
          </a>
          <a href="https://www.youtube.com/@archviz-dakar" target="_blank">
            <div className="network">
              <ion-icon name="logo-youtube"></ion-icon>
            </div>
          </a>
          <a
            href="mailto:archviz.sn@gmail.com?subject=Message provenant de archviz-dakar.com"
            target="_blank"
          >
            <div className="network">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
          </a>
        </div>
      </section>

      <section className="AccueilBigProjectsSection">
        <OneBigProject
          title={"Visualisation de projets immobiliers"}
          image={ImageProjectQ1}
          description={`Visualisez et concrétisez vos projets d'aménagement grâce à l'accompagnement de nos architectes d'intérieur.`}
          color={"#f1f1f1"}
          textcolor={"#000"}
          theKey={1}
          link={"/VillaSarr"}
          The_Experience={true}
          The_Experience_Link={
            "https://archviz-villa-gabriel-sarr.netlify.app/"
          }
          side={"right"}
          OneHash={hashProjectQ1}
        />

        <OneBigProject
          title={"Décoration Intérieur"}
          image={ImageProjectJ1}
          description={
            "À l'aide des logiciels de dernière génération et de notre savoir-faire dans le domaine de l’architecture d’intérieur. Nous vous aidons dans l’aménagement de vos espaces."
          }
          color={"#8a6f54"}
          textcolor={"#f1f1f1"}
          theKey={2}
          link={"/Appartement-F4-A"}
          side={"left"}
          OneHash={hashProjectJ1}
          The_Experience={true}
          The_Experience_Link={"https://archviz-villa-bamba-ba.netlify.app/"}
        />

        <OneBigProject
          title={"Création de plan isométrique"}
          image={ImageProjectP1}
          description={`Les plans d'étage isométriques offrent une vue en trois dimensions des configurations d'un bien immobilier, aidant les clients à mieux comprendre la disposition spatiale et la fonctionnalité des différentes zones.`}
          color={"#F1F1F1"}
          textcolor={"#222"}
          theKey={3}
          link={"/Immeuble-Talles"}
          side={"right"}
          OneHash={hashProjectP1}
          The_Experience={false}
        />

        <OneBigProject
          title={"Visualisation de projets immobiliers"}
          image={ImageProjectH1}
          description={
            "Des designs Modernes et épurés. Nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs. Pour se faire nous utilisons différents logiciels avec les dernières innovations pour des rendus d’images à la fois réalistes et immersives."
          }
          color={"#2b2828"}
          textcolor={"#f1f1f1"}
          theKey={4}
          link={"/Villa-Ndayane"}
          side={"left"}
          OneHash={hashProjectH1}
          The_Experience={false}
        />

        <OneBigProject
          title={"Décoration Intérieur"}
          image={ImageProjectT2}
          description={
            "Des designs Modernes et épurés. Nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs. Pour se faire nous utilisons différents logiciels avec les dernières innovations pour des rendus d’images à la fois réalistes et immersives."
          }
          color={"#a39081"}
          textcolor={"#222"}
          theKey={5}
          link={"/Villa_Onomo"}
          side={"right"}
          OneHash={hashProjectT2}
          The_Experience={false}
        />

        <OneBigProject
          title={"Design Façade d'Immeuble"}
          image={ImageProjectR1}
          description={
            "Grâce à l’utilisation des logiciels de pointe et à notre expertise en architecture, nous vous accompagnons dans la conception et la réalisation du design de façade de vos espaces."
          }
          color={"#EAEAEA"}
          textcolor={"#222"}
          theKey={6}
          link={"/Façade_Immeuble"}
          The_Experience={false}
          side={"left"}
          OneHash={hashProjectR1}
        />

        <OneBigProject
          title={"Cité El Hadj Amadou Ba"}
          image={ImageProjectB1}
          description={
            "Ce projet comprend des villas familiales, des bâtiments commerciaux et résidentiels ainsi que des lieux publics. Notre travail se partage à parts égales entre les animations architecturales et les rendus 3D. Nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs."
          }
          color={"#F1F1F1"}
          textcolor={"#222"}
          theKey={7}
          link={"/City1"}
          side={"right"}
          OneHash={hashProjectB1}
          The_Experience={false}
        />

        <OneBigProject
          title={"Design Bureau"}
          image={ImageProjectBB1}
          description={
            "Visualisez votre bureau avant de le construire. La modélisation 3D vous permet d'explorer les agencements, le placement des meubles et les éléments de design, le tout virtuellement."
          }
          color={"#222"}
          textcolor={"#f1f1f1"}
          theKey={8}
          link={"/Design_Bureau"}
          The_Experience={false}
          side={"left"}
          OneHash={hashProjectBB1}
        />

        <OneBigProject
          title={"Visualisation de projets immobiliers"}
          image={ImageProjectS2}
          description={
            "Des designs Modernes, épurés, etc… nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs. Pour se faire nous utilisons différents logiciels avec les dernières innovations pour des rendus d’images à la fois réalistes et immersives."
          }
          color={"#F1F1F1"}
          textcolor={"#222"}
          The_Experience={true}
          The_Experience_Link={"https://residence-Alya-f4-pm.netlify.app/"}
          theKey={9}
          side={"right"}
          OneHash={hashProjectS2}
          link={"/Appartement-Alya"}
        />
      </section>

      <section className="galerie_presantation">
        <Link className="nos_réalisations" to={"./Travaux"}>
          Nos Réalisations <ion-icon name="arrow-forward-outline"></ion-icon>
        </Link>
      </section>
      <h2 className="nos-partners"></h2>

      <section className="partnership-container">
        <div className="partnership-inner-container"></div>
        <div className="partnership-inner-container"></div>
        <div className="partnership-inner-container"></div>
        <div className="partnership-inner-container"></div>
        <div className="partnership-inner-container"></div>
        <div className="partnership-inner-container"></div>
        <div className="partnership-inner-container"></div>
        <div className="partnership-inner-container"></div>
        <div className="partnership-inner-container"></div>
      </section>

      <TheGallery GetImageOnAccueil={GetImageOnApp} />
    </div>
  );
}

//!###############################################################
function TheGallery({ GetImageOnAccueil }) {
  const onClickOnImage = (theimage, title, date, link) => {
    GetImageOnAccueil(theimage, title, date, link);
  };

  return (
    <div className="the_galerie_container">
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectT2}
        link={"/Villa_Onomo"}
        image={ImageProjectT2}
        title={"Villa Onomo"}
        date={"25 juin, 2024"}
      />
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectI4}
        link={"/Residence-Alya"}
        image={ImageProjectI4}
        title={"Residence Alya"}
        date={"18 Avril, 2025"}
      />

      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectS10}
        link={"/VillaSamb"}
        image={ImageProjectS10}
        title={"Villa Samb"}
        date={"05 Mai, 2024"}
      />
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectQ1}
        link={"/VillaSarr"}
        image={ImageProjectQ1}
        title={"Villa Sarr"}
        date={"05 Septembre, 2024"}
      />
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectBB3}
        link={"/Design_Bureau"}
        image={ImageProjectBB3}
        title={"Design Bureau"}
        date={"12 Juin, 2024"}
      />

      {/*///######################################## */}
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectS7}
        link={"/VillaSamb"}
        image={ImageProjectS7}
        title={"Villa Samb"}
        date={"05 Mai, 2024"}
      />
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectJ1}
        link={"/Appartement-F4-A"}
        image={ImageProjectJ1}
        title={"Appartement-F4-A"}
        date={"25 Septembre, 2023"}
      />
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectT8}
        link={"/Villa_Onomo"}
        image={ImageProjectT8}
        title={"Villa Onomo"}
        date={"25 juin, 2024"}
      />
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectS4}
        link={"/VillaSamb"}
        image={ImageProjectS4}
        title={"Villa Samb"}
        date={"05 Mai, 2024"}
      />
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectB9}
        link={"/City1"}
        image={ImageProjectB9}
        title={"Cité El Hadj Amadou Ba"}
        date={"12 Juin, 2023"}
      />
      {/*///######################################## */}
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectT9}
        link={"/Villa_Onomo"}
        image={ImageProjectT9}
        title={"Villa Onomo"}
        date={"25 juin, 2024"}
      />
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectK1}
        link={"/Gym"}
        image={ImageProjectK1}
        title={"Espace Sportif"}
        date={"07 Mai, 2023"}
      />
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectR2}
        link={"/Façade_Immeuble"}
        image={ImageProjectR2}
        title={"Façade Immeuble"}
        date={"27 Mai, 2022"}
      />

      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectZ1}
        link={"/Résidence-MANDA"}
        image={ImageProjectL1}
        title={"Résidence MANDA"}
        date={"9 Novembre, 2025"}
      />
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectQ10}
        link={"/VillaSarr"}
        image={ImageProjectQ10}
        title={"Villa Sarr"}
        date={"12 Juin, 2024"}
      />
      {/*///######################################## */}
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectS3}
        link={"/VillaSamb"}
        image={ImageProjectS3}
        title={"Villa Samb"}
        date={"05 Mai, 2024"}
      />

      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectT4}
        link={"/Villa_Onomo"}
        image={ImageProjectT4}
        title={"Villa Onomo"}
        date={"25 juin, 2024"}
      />

      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectZ1}
        link={"/Résidence-MANDA"}
        image={ImageProjectL2}
        title={"Résidence MANDA"}
        date={"9 Novembre, 2025"}
      />
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectI2}
        link={"/Residence-Alya"}
        image={ImageProjectH1}
        title={"Residence Alya"}
        date={"18 Avril, 2025"}
      />
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectB2}
        link={"/City1"}
        image={ImageProjectB2}
        title={"Cité El Hadj Amadou Ba"}
        date={"12 Juin, 2023"}
      />
      {/*///######################################## */}
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectBB6}
        link={"/Design_Bureau"}
        image={ImageProjectBB6}
        title={"Design Bureau"}
        date={"12 Juin, 2024"}
      />
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectS2}
        link={"/Appartement-Alya"}
        image={ImageProjectS2}
        title={"Appartement Alya"}
        date={"22 Janvier, 2025"}
      />
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectT7}
        link={"/Villa_Onomo"}
        image={ImageProjectT7}
        title={"Villa Onomo"}
        date={"25 juin, 2024"}
      />
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectI3}
        link={"/Residence-Alya"}
        image={ImageProjectI3}
        title={"Residence Alya"}
        date={"18 Avril, 2025"}
      />
      <OneGalerieElement
        giveImageId={onClickOnImage}
        oneHash={hashProjectBB2}
        link={"/Design_Bureau"}
        image={ImageProjectBB2}
        title={"Design Bureau"}
        date={"12 Juin, 2024"}
      />
    </div>
  );
}
//!###############################################################
function OneGalerieElement({
  giveImageId,
  title,
  theKey,
  image,
  date,
  link,
  oneHash,
}) {
  const clickOnImage = (e) => {
    let AccueilContainer = document.querySelector(".App_container");
    AccueilContainer.scrollTop = 0;
    giveImageId(image, title, date, link);
  };

  return (
    <div className="one_galerie_element">
      <ImageBlurhashC src={image} theHash={oneHash} theTitle={title} />

      <div className="one_galerie_element_hover">
        <div className="iner_container">
          <Link onClick={clickOnImage} to={"/Galerie"}>
            <div className="Icon-to-click-on">
              <ion-icon name="expand-sharp"></ion-icon>
            </div>
          </Link>

          <Link className="titre" to={link}>
            {title}
          </Link>
          <p className="date">{date}</p>
        </div>
      </div>
    </div>
  );
}
//!###############################################################
function OneBigProject({
  color,
  title,
  description,
  side,
  textcolor,
  theKey,
  image,
  link,
  The_Experience,
  The_Experience_Link,
  OneHash,
}) {
  const [TheSide, setTheSide] = useState("");

  useEffect(() => {
    setTheSide(side);
    let TheSidedProject = document.querySelectorAll(".One_Project_In_Home");
    TheSidedProject[theKey - 1].style.backgroundColor = color;
    TheSidedProject[theKey - 1].style.border = `.5em solid ${color}`;
  });

  return (
    <Fragment>
      {TheSide === "right" ? (
        <section className="One_Project_In_Home right">
          <div
            style={{
              color: textcolor,
            }}
            className="info_container "
          >
            <h3
              style={{
                color: textcolor,
              }}
              className="title"
            >
              {title}
            </h3>
            <div className="description">
              <div
                style={{
                  backgroundColor: textcolor,
                }}
                className="bar"
              ></div>
              {description}
              <Link
                className="the_link"
                style={{
                  color: textcolor,
                  border: `.1em solid ${textcolor}`,
                }}
                to={link}
              >
                Voir plus <ion-icon name="arrow-forward-outline"></ion-icon>
              </Link>
              {The_Experience ? (
                <a
                  style={{
                    color: textcolor,
                    border: `.1em solid ${textcolor}`,
                  }}
                  className="the_link"
                  href={The_Experience_Link}
                  target="_blank"
                >
                  Experience VR/AR{" "}
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <ImageBlurhashB src={image} theHash={OneHash} theTitle={title} />
        </section>
      ) : (
        <section className="One_Project_In_Home left">
          <div
            style={{
              color: textcolor,
            }}
            className="info_container"
          >
            <h3
              style={{
                color: textcolor,
              }}
              className="title"
            >
              {title}
            </h3>
            <div className="description">
              <div
                style={{
                  backgroundColor: textcolor,
                }}
                className="bar"
              ></div>
              {description}
              <Link
                className="the_link"
                style={{
                  color: textcolor,
                  border: `.1em solid ${textcolor}`,
                }}
                to={link}
              >
                Voir plus <ion-icon name="arrow-forward-outline"></ion-icon>
              </Link>
              {The_Experience ? (
                <a
                  style={{
                    color: textcolor,
                    border: `.1em solid ${textcolor}`,
                  }}
                  className="the_link"
                  href={The_Experience_Link}
                  target="_blank"
                >
                  Experience VR/AR{" "}
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <ImageBlurhashB src={image} theHash={OneHash} theTitle={title} />
        </section>
      )}
    </Fragment>
  );
}

//!###############################################################
function TheFooter({}) {
  const onClickOnTab = () => {
    let AccueilContainer = document.querySelector(".App_container");
    AccueilContainer.scrollTop = 0;
  };

  return (
    <footer className="the_footer">
      <div role="img" alt="ArchVizLogo" className="logo-container"></div>
      <div className="titles">Categories</div>
      <div className="titles">Contacts</div>
      <div className="titles">Reseaux</div>
      <div className="titles">Localisation</div>

      <Link
        to={"/formation"}
        // href="https://archviz-dakar.com/Formation"
        // target="_blank"
        className="portfolio_link"
      ></Link>

      <div class="map_container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21829.672231280812!2d-17.481922300740727!3d14.713874557348396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868d1e0bab8c8d25%3A0x664021658a7c1fe5!2sArchViz%20Dakar!5e0!3m2!1sfr!2ssn!4v1744225513580!5m2!1sfr!2ssn"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <p className="archviz_description">
        Nous aidons les constructeurs et les promoteurs immobiliers à
        impressionner les investisseurs et les acheteurs avec des visuels
        professionnels.
      </p>

      <nav className="menu_elemant_container">
        <Link className="menu_elemant" to={"/"} onClick={onClickOnTab}>
          Accueil
        </Link>
        <Link className="menu_elemant" to={"/Travaux"} onClick={onClickOnTab}>
          Travaux
        </Link>
        <Link className="menu_elemant" to={"/Services"} onClick={onClickOnTab}>
          Services
        </Link>
        <Link className="menu_elemant" to={"/Galerie"} onClick={onClickOnTab}>
          Galerie
        </Link>
        <div className="menu_elemant"></div>
      </nav>

      <div className="categories_elemant_container">
        <div className="categories_elemant">
          <ion-icon name="ellipse"></ion-icon>Exterior Design
        </div>
        <div className="categories_elemant">
          <ion-icon name="ellipse"></ion-icon>Interior Design
        </div>
        <div className="categories_elemant">
          <ion-icon name="ellipse"></ion-icon>Creation de Maquette
        </div>
        <div className="categories_elemant">
          <ion-icon name="ellipse"></ion-icon>Visualisation
        </div>
        <div className="categories_elemant">
          <ion-icon name="ellipse"></ion-icon>Creation de Visite Web
        </div>
        <div className="categories_elemant">
          <ion-icon name="ellipse"></ion-icon>Experience de Realite Virtuel
        </div>
      </div>

      <div className="contact_elemant_container">
        <div className="contact_elemant ">Tel: +221 77 727 86 55</div>
        <div className="contact_elemant ">Tel: +221 78 990 92 46</div>
        <div className="contact_elemant ">archviz.sn@gmail.com</div>
      </div>

      <div className="network_container">
        <a href="https://www.instagram.com/archviz_dakar/" target="_blank">
          <div className="network">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/company/archviz-dakar/"
          target="_blank"
        >
          <div className="network">
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>
        </a>

        <a
          href="mailto:archviz.sn@gmail.com?subject=Message provenant de archviz-dakar.com"
          target="_blank"
        >
          <div className="network">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
        </a>

        <a href="https://www.facebook.com/ARVHVIZ/" target="_blank">
          <div className="network">
            <ion-icon name="logo-facebook"></ion-icon>
          </div>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=221777278655&text=Message provenant de archviz-dakar.com"
          target="_blank"
        >
          <div className="network">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </div>
        </a>
        <a href="https://www.youtube.com/@archviz-dakar" target="_blank">
          <div className="network">
            <ion-icon name="logo-youtube"></ion-icon>
          </div>
        </a>
      </div>

      <div className="the_line"></div>

      <div className="country">
        <ion-icon name="globe-outline"></ion-icon> Sénégal
      </div>
      <div className="rights">© 2025 | Archviz. Tout droit réservé.</div>
    </footer>
  );
}

export { Accueil, TheGallery, OneBigProject, TheFooter };
