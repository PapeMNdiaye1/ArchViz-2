import "./Style/Style.css";
import React, { useState, Suspense, Fragment } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import { Accueil } from "./Pages/Accueil";
import { TheFooter } from "./Pages/Accueil";
import Service from "./Pages/Service";
import Travaux from "./Pages/Travaux";
import Gallery from "./Pages/Galerie";

import ExtraPathPage from "./Pages/Extra_Path_Page";

const TopBare = React.lazy(() => import("./TopBare"));
const Contact = React.lazy(() => import("./Pages/Contact"));

//!###############################################################
//!###############################################################
//!###############################################################
function TheLoader() {
  return (
    <Fragment>
      <div className="before-loader">
        <div className="hover_loader">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="hover_loader_container">
        <div className="hover_loader">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
//!###############################################################

const ImmeubleTalles = React.lazy(() =>
  import("./Pages/Projects/Résidence_Pierre_De_Lune")
);
const SmallHouse1 = React.lazy(() => import("./Pages/Projects/Villa_Onomo"));
const AppartementBHome1 = React.lazy(() =>
  import("./Pages/Projects/Villa_Omaïs")
);
const DesignBureau = React.lazy(() => import("./Pages/Projects/Design_Office"));
const Façade_Immeuble = React.lazy(() =>
  import("./Pages/Projects/Façade_Immeuble")
);
const AppartementFA = React.lazy(() =>
  import("./Pages/Projects/Appartement_Bamba_Ba")
);
const Gym = React.lazy(() => import("./Pages/Projects/Gym"));
const Cité_El_Hadj_Amadou_Ba_El_Hadj_Amadou_Ba = React.lazy(() => import("./Pages/Projects/Cité_El_Hadj_Amadou_Ba"));
const Villa = React.lazy(() => import("./Pages/Projects/Villa_Ndayane"));
const Villa_Saly = React.lazy(() => import("./Pages/Projects/Residence_Alya"));
const ImmenbleTallesB = React.lazy(() =>
  import("./Pages/Projects/Résidence_Manda")
);
const VillaSamb = React.lazy(() => import("./Pages/Projects/Villa_Samb"));
const Villa_Sarr = React.lazy(() => import("./Pages/Projects/Villa_Sarr"));
const AppartementAlya = React.lazy(() =>
  import("./Pages/Projects/Appartement_Alya")
);
const Formation = React.lazy(() => import("./Pages/Projects/Formation"));

//!###############################################################
function App() {
  const [TheImage, setTheImage] = useState("");
  const [TheTitle, setTheTitle] = useState("");
  const [TheDate, setTheDate] = useState("");
  const [TheLink, setTheLink] = useState("/");

  const changeTab = (newTab, link) => {
    console.log(newTab, link);
    let TheFooter = document.querySelector(".the_footer");
    TheFooter.style.opacity = "0";
  };

  const GetImage = (theimage, title, date, link) => {
    setTheImage(theimage);
    setTheTitle(title);
    setTheDate(date);
    setTheLink(link);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <TopBare onChangeTab={changeTab} />
        <div className="App_container">
          <TheLoader />
          <Routes>
            <Route
              exact
              path="*"
              element={
                <Suspense fallback={<TheLoader />}>
                  <ExtraPathPage />
                </Suspense>
              }
            />
            <Route
              exact
              path="/"
              element={<Accueil GetImageToApp={GetImage} />}
            />
            <Route exact path="/Travaux" element={<Travaux />} />
            <Route
              exact
              path="/Galerie"
              element={
                <Gallery
                  TheImageToGallery={TheImage}
                  TheTitleToGallery={TheTitle}
                  TheDateToGallery={TheDate}
                  TheLinkToGallery={TheLink}
                />
              }
            />
            <Route exact path="/Services" element={<Service />} />

            <Route
              exact
              path="/Contact"
              element={
                <Suspense fallback={<TheLoader />}>
                  <Contact />
                </Suspense>
              }
            />

            {/* !############################################## */}

            <Route
              exact
              path="/Résidence_Pierre_De_Lune"
              element={
                <Suspense fallback={<TheLoader />}>
                  <ImmeubleTalles />
                </Suspense>
              }
            />
            <Route
              exact
              path="/Villa_Onomo"
              element={
                <Suspense fallback={<TheLoader />}>
                  <SmallHouse1 />
                </Suspense>
              }
            />
            <Route
              exact
              path="/Villa_Omaïs"
              element={
                <Suspense fallback={<TheLoader />}>
                  <AppartementBHome1 />
                </Suspense>
              }
            />
            <Route
              exact
              path="/Design_Bureau"
              element={
                <Suspense fallback={<TheLoader />}>
                  <DesignBureau />
                </Suspense>
              }
            />
            <Route
              exact
              path="/Façade_Immeuble"
              element={
                <Suspense fallback={<TheLoader />}>
                  <Façade_Immeuble />
                </Suspense>
              }
            />
            <Route
              exact
              path="/Appartement_Bamba_Ba"
              element={
                <Suspense fallback={<TheLoader />}>
                  <AppartementFA />
                </Suspense>
              }
            />
            <Route
              exact
              path="/Gym"
              element={
                <Suspense fallback={<TheLoader />}>
                  <Gym />
                </Suspense>
              }
            />
            <Route
              exact
              path="/Cité_El_Hadj_Amadou_Ba"
              element={
                <Suspense fallback={<TheLoader />}>
                  <Cité_El_Hadj_Amadou_Ba_El_Hadj_Amadou_Ba />
                </Suspense>
              }
            />
            <Route
              exact
              path="/Villa_Ndayane"
              element={
                <Suspense fallback={<TheLoader />}>
                  <Villa />
                </Suspense>
              }
            />
            <Route
              exact
              path="/Residence_Alya"
              element={
                <Suspense fallback={<TheLoader />}>
                  <Villa_Saly />
                </Suspense>
              }
            />
            <Route
              exact
              path="/Résidence_Manda"
              element={
                <Suspense fallback={<TheLoader />}>
                  <ImmenbleTallesB />
                </Suspense>
              }
            />
            <Route
              exact
              path="/VillaSamb"
              element={
                <Suspense fallback={<TheLoader />}>
                  <VillaSamb />
                </Suspense>
              }
            />
            <Route
              exact
              path="/Villa_Sarr"
              element={
                <Suspense fallback={<TheLoader />}>
                  <Villa_Sarr />
                </Suspense>
              }
            />
            <Route
              exact
              path="/Appartement_Alya"
              element={
                <Suspense fallback={<TheLoader />}>
                  <AppartementAlya />
                </Suspense>
              }
            />
            <Route
              exact
              path="/Formation"
              element={
                <Suspense fallback={<TheLoader />}>
                  <Formation />
                </Suspense>
              }
            />
          </Routes>
          <TheFooter />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
