import { React, useEffect, useState, Fragment } from 'react';

import ImageFormation1 from '../../Style/Images/SVG/Formation-1.png';
import ImageFormation2 from '../../Style/Images/SVG/Formation-2.png';

function SmallHouse1({ }) {
    // const [TheImageContainer, setTheImageContainer] = useState(false);
    // const [TheImageInTheCoFontainer, setTheImageInTheContainer] = useState(ImageProjectC1);
    useEffect(() => {
        let ToDisplayonBLoade = document.querySelector(".before-loader")
        ToDisplayonBLoade.style.display = 'none';

        let Page_slider = document.querySelector('.page_title_slider')
        Page_slider.style.opacity = `0`

        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;

        let hoverLoaderContainer = document.querySelector(".hover_loader_container")
        hoverLoaderContainer.style.display = 'flex';

        setTimeout(function () {
            hoverLoaderContainer.style.display = '';
        }, 1500);

        return () => {
            Page_slider.style.opacity = `1`;
            ToDisplayonBLoade.style.display = 'flex';
            AccueilContainer.scrollTop = 0;
        }
    }, []);

    // const displayImage = (e) => {
    //     if (TheImageContainer) {
    //         setTheImageContainer(false);
    //     } else {
    //         setTheImageInTheContainer(e.target.getAttribute("src"))
    //         setTheImageContainer(true);
    //     }
    // }

    return (
        <Fragment>

            <div className='Formation'>

                <div className='formation_section_1'>
                    <img src={ImageFormation1} width='100%' />
                    <h1 className='project_title'>
                        Formation en 3D
                    </h1>
                    <h1 className='project_title-2'>
                        Architecture visualisation
                    </h1>

                </div>
                <div className='formation_section_2'>
                    <img src={ImageFormation2} width='100%' />
                    <h1 className='project_title'>
                        Développer <br/>
                        Vos Compétences <br/>
                        En Visualisation <br/>
                         Architecturale 3D
                    </h1>
                    <p>
                        Une formation complete de 4 mois de comportent <br />
                        des cour live sur Discord un canale question<br />
                        ouvert h24 et de resouse gratuit (SetUp logiciels,<br />
                        Models 3D , HDRI , PBR . . .)
                    </p>
                </div>
                <div className='formation_section_3'>
                    hgghh
                          </div>


            </div>
        </Fragment>
    );
}




export default SmallHouse1;
