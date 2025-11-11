import { React, useEffect } from "react";

function Contacts({}) {
  useEffect(() => {
    let ToDisplayonBLoade = document.querySelector(".before-loader");
    ToDisplayonBLoade.style.display = "none";

    let Page_slider = document.querySelector(".page_title_slider");
    Page_slider.style.top = `-400%`;

    let AccueilContainer = document.querySelector(".App_container");
    AccueilContainer.scrollTop = 0;

    let hoverLoaderContainer = document.querySelector(
      ".hover_loader_container"
    );
    hoverLoaderContainer.style.display = "flex";

    setTimeout(function () {
      hoverLoaderContainer.style.display = "";
    }, 1500);

    let TheFooter = document.querySelector(".the_footer");
    TheFooter.style.opacity = "1";

    return () => {
      ToDisplayonBLoade.style.display = "flex";
      AccueilContainer.scrollTop = 0;
    };
  }, []);

  return (
    <div id="Contacts">
      <div className="Contact-container">
        <OneSection
          link={"mailto:archviz.sn@gmail.com?subject=The message"}
          title={
            <div className="network">
              <ion-icon name="mail-outline"></ion-icon>MAIL
            </div>
          }
          title2={<div className="network">archviz.sn@gmail.com</div>}
        />
        <OneSection
          link={"https://www.youtube.com/@archviz-dakar"}
          title={
            <div className="network">
              <ion-icon name="logo-youtube"></ion-icon>YOUTUBE
            </div>
          }
          title2={<div className="network">@archviz-dakar</div>}
        />
        <OneSection
          link={
            "https://api.whatsapp.com/send?phone=221777278655&text=The message"
          }
          title={
            <div className="network">
              <ion-icon name="logo-whatsapp"></ion-icon>WHATSAPP
            </div>
          }
          title2={<div className="network">+221 77 727 86 55</div>}
        />
        <OneSection
          link={"https://www.instagram.com/archviz_dakar/"}
          title={
            <div className="network">
              <ion-icon name="logo-instagram"></ion-icon>INSTAGRAM
            </div>
          }
          title2={<div className="network">@arch_viz_sn</div>}
        />
        <OneSection
          link={"https://www.facebook.com/ARVHVIZ/"}
          title={
            <div className="network">
              <ion-icon name="logo-facebook"></ion-icon>FACEBOOK
            </div>
          }
          title2={<div className="network">f/archviz</div>}
        />
        <OneSection
          link={"https://www.linkedin.com/company/archviz-dakar/"}
          title={
            <div className="network">
              <ion-icon name="logo-linkedin"></ion-icon>LINKEDIN
            </div>
          }
          title2={<div className="network">in/Archviz</div>}
        />
      </div>
    </div>
  );
}

//!###################################################
function OneSection({ title, link, title2 }) {
  const onClickOnTab = (e) => {
    e.target.childNodes[0].style.top = "";
    e.target.childNodes[0].childNodes[1].style.opacity = "";
  };

  const onMouseOverTitle = (e) => {
    e.target.childNodes[0].style.top = "-100%";
    e.target.childNodes[0].childNodes[1].style.opacity = ".7";
  };

  const onMouseOutTitle = (e) => {
    e.target.childNodes[0].style.top = "";
    e.target.childNodes[0].childNodes[1].style.opacity = "";
  };
  return (
    <a
      href={link}
      target="_blank"
      onClick={onClickOnTab}
      onMouseOver={onMouseOverTitle}
      onMouseOut={onMouseOutTitle}
      className="One-Contact"
    >
      <div className="One-slider-Section">
        <div className="Top-Title">{title}</div>
        <div className="bottom-Title">{title2}</div>
      </div>
    </a>
  );
}

export default Contacts;
