import { React, useEffect, useState, Fragment } from 'react';

import ImageFormation1 from '../../Style/Images/SVG/Formation-1.png';

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
                    <img  src={ImageFormation1} width='100%' />
                        <h1 className='project_title'>
                       Formation en 3D
                    </h1>
                  
                </div>
                 <div className='formation_section_2'>
                    hgghh
                </div>
                 <div className='formation_section_3'>
                    hgghh
                </div>

            
            </div>
        </Fragment>
    );
}




export default SmallHouse1;
