import { useEffect, Fragment, useState } from "react";

let currentUrl;

function ExtraPathPage({}) {
  const [theLinkToSet, setTheLink] = useState(0);
  useEffect(() => {
    let TopBar = document.querySelector("#Top-Bare");
    let TheFooter = document.querySelector(".the_footer");
    let AppContainer = document.querySelector(".App_container ");

    TopBar.style.height = "0em";
    AppContainer.style.zIndex = "10000";

    TopBar.style.display = "none";
    TheFooter.style.display = "none";
    AppContainer.style.marginTop = " 0em";
    AppContainer.style.height = "100vh";
    AppContainer.style.overflow = "hidden";

    currentUrl = window.location.pathname.toString();

    console.log(currentUrl);

    if (currentUrl === "/visite-virtuel/Villa-Sarr") {
      setTheLink(1);
    } else if (currentUrl === "/Visite-Virtuel/Villa-Bamba-Ba") {
      setTheLink(2);
    } else if (currentUrl === "/test3") {
      setTheLink(3);
    } else if (currentUrl === "/test4") {
      setTheLink(4);
    } else {
      setTheLink(0);
    }

    let ToDisplayonBLoade = document.querySelector(".before-loader");
    ToDisplayonBLoade.style.display = "none";
  }, []);

  console.log(theLinkToSet);

  return (
    <Fragment>
      <div id="extra-path-page-container">
        {theLinkToSet == 0 && <div id="new-VR-viewer-container">ninp</div>}
        {theLinkToSet == 1 && (
          <div id="new-VR-viewer-container">
            <iframe
              src="https://archviz-villa-gabriel-sarr.netlify.app/"
              allowFullScreen
              title="VR Viewer"
              allowvr="yes"
              allow="vr; xr; accelerometer; magnetometer; gyroscope; webvr; webxr;"
              allowfullscreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              frameborder="0"
            ></iframe>
          </div>
        )}
        {theLinkToSet == 2 && (
          <div id="new-VR-viewer-container">
            <iframe
              src="https://archviz-villa-bamba-ba.netlify.app/"
              allowFullScreen
              title="VR Viewer"
              allowvr="yes"
              allow="vr; xr; accelerometer; magnetometer; gyroscope; webvr; webxr;"
              allowfullscreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              frameborder="0"
            ></iframe>
          </div>
        )}
        {theLinkToSet == 3 && <div id="new-VR-viewer-container">test3</div>}
        {theLinkToSet == 4 && <div id="new-VR-viewer-container">test4</div>}
      </div>
    </Fragment>
  );
}

export default ExtraPathPage;
