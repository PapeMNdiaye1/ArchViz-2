import { useEffect, Fragment, useState } from "react";

let currentUrl;

function ExtraPathPage({}) {
  const [theLinkToSet, setTheLink] = useState(0);
  useEffect(() => {
    window.addEventListener("load", () => {
      // Show alert — user has to tap "OK" (counts as a gesture on iOS)
      alert("Tap OK to enable gyroscope access");

      // After alert is closed, request permission
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission()
          .then((state) => {
            if (state === "granted") {
              window.addEventListener("deviceorientation", (e) => {
                console.log(
                  "Alpha:",
                  e.alpha,
                  "Beta:",
                  e.beta,
                  "Gamma:",
                  e.gamma
                );
              });
              console.log("Gyroscope access granted");
            } else {
              console.warn("Gyroscope permission denied");
            }
          })
          .catch(console.error);
      } else {
        // Non-iOS devices or older versions
        window.addEventListener("deviceorientation", (e) => {
          console.log("Alpha:", e.alpha, "Beta:", e.beta, "Gamma:", e.gamma);
        });
      }
    });

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
        {theLinkToSet == 0 && <div id="new-VR-viewer-container">404</div>}
        {theLinkToSet == 1 && (
          <div id="new-VR-viewer-container">
            <iframe
              src="https://archviz-villa-gabriel-sarr.netlify.app/"
              title="VR Viewer"
              allow="accelerometer; gyroscope; magnetometer; fullscreen; xr-spatial-tracking"
              // allowfullscreen
              // mozallowfullscreen="true"
              // webkitallowfullscreen="true"
              frameborder="0"
            ></iframe>
          </div>
        )}
        {theLinkToSet == 2 && (
          <div id="new-VR-viewer-container">
            <iframe
              src="https://archviz-villa-bamba-ba.netlify.app/"
              title="VR Viewer"
              allow="accelerometer; gyroscope; magnetometer; fullscreen; xr-spatial-tracking"
              // allowfullscreen
              // mozallowfullscreen="true"
              // webkitallowfullscreen="true"
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
