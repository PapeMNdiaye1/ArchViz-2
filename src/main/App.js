import './Style/Style.css';
import React, { useState, Suspense } from 'react';
import { Routes, BrowserRouter, Route, } from "react-router-dom";

import { Accueil } from './Pages/Accueil';
import { TheFooter } from './Pages/Accueil';
import Service from './Pages/Service';

const TopBare = React.lazy(() => import('./TopBare'));
const Travaux = React.lazy(() => import('./Pages/Travaux'));
const Contact = React.lazy(() => import('./Pages/Contact'));

//!###############################################################
function TheLoader() {
  return (
    <div className='hover_loader_container'>
      <div className='hover_loader'>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  );
}
//!###############################################################

const Gallery = React.lazy(() => import('./Pages/Galerie'));
const Interior1 = React.lazy(() => import('./Pages/Projects/Interior_Design'));
const SmallHouse1 = React.lazy(() => import('./Pages/Projects/Small_House_1'));
const Hangar1 = React.lazy(() => import('./Pages/Projects/Hangar_1'));
const Touba = React.lazy(() => import('./Pages/Projects/Touba'));
const Pharmacie1 = React.lazy(() => import('./Pages/Projects/Pharmacie_1'));
const AppartementFA = React.lazy(() => import('./Pages/Projects/Appartement-F4-A'));
const Gym = React.lazy(() => import('./Pages/Projects/Gym'));
const City1 = React.lazy(() => import('./Pages/Projects/Cité'));
const MSAD = React.lazy(() => import('./Pages/Projects/MSAD'));
const Villa = React.lazy(() => import('./Pages/Projects/Villa_A'));
const Villa_Saly = React.lazy(() => import('./Pages/Projects/Villa_B'));
const VillaTerangaAlAmin = React.lazy(() => import('./Pages/Projects/Villa_Teranga_Al_Amin'));

//!###############################################################
function App() {

  const [TheImage, setTheImage] = useState('');
  const [TheTitle, setTheTitle] = useState('');
  const [TheDate, setTheDate] = useState('');
  const [TheLink, setTheLink] = useState('/');

  const changeTab = (newTab, link) => {
    console.log(newTab, link);
    let TheFooter = document.querySelector(".the_footer")
    TheFooter.style.opacity = '0';
  }

  const GetImage = (theimage, title, date, link) => {
    setTheImage(theimage);
    setTheTitle(title);
    setTheDate(date);
    setTheLink(link);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <TopBare onChangeTab={changeTab} />
        <div className='App_container'>
          <TheLoader />
          <Routes>

            <Route exact path="/"
              element={<Accueil GetImageToApp={GetImage} />}
            />
            <Route exact path="/Travaux" element={<Suspense fallback={<TheLoader />}><Travaux /></Suspense>} />
            <Route exact path="/Services" element={<Service />} />
            <Route exact path="/Contact" element={<Suspense fallback={<TheLoader />}><Contact /></Suspense>} />

            <Route exact path="/Galerie" element={
              <Suspense fallback={<TheLoader />}>
                <Gallery
                  TheImageToGallery={TheImage}
                  TheTitleToGallery={TheTitle}
                  TheDateToGallery={TheDate}
                  TheLinkToGallery={TheLink}
                />
              </Suspense>
            } />

            {/* !############################################## */}

            <Route exact path="/Interior1" element={<Suspense fallback={<TheLoader />}><Interior1 /></Suspense>} />
            <Route exact path="/SmallHouse1" element={<Suspense fallback={<TheLoader />}><SmallHouse1 /></Suspense>} />
            <Route exact path="/Hangar1" element={<Suspense fallback={<TheLoader />}><Hangar1 /></Suspense>} />
            <Route exact path="/Touba" element={<Suspense fallback={<TheLoader />}><Touba /></Suspense>} />
            <Route exact path="/Pharmacie1" element={<Suspense fallback={<TheLoader />}><Pharmacie1 /></Suspense>} />
            <Route exact path="/Appartement-F4-A" element={<Suspense fallback={<TheLoader />}><AppartementFA /></Suspense>} />
            <Route exact path="/Gym" element={<Suspense fallback={<TheLoader />}><Gym /></Suspense>} />
            <Route exact path="/City1" element={<Suspense fallback={<TheLoader />}><City1 /></Suspense>} />
            <Route exact path="/MSAD" element={<Suspense fallback={<TheLoader />}><MSAD /></Suspense>} />
            <Route exact path="/Villa" element={<Suspense fallback={<TheLoader />}><Villa /></Suspense>} />
            <Route exact path="/Villa-Saly" element={<Suspense fallback={<TheLoader />}><Villa_Saly /></Suspense>} />
            <Route exact path="/VillaTerangaAlAmin" element={<Suspense fallback={<TheLoader />}><VillaTerangaAlAmin /></Suspense>} />

          </Routes>
          <TheFooter />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
