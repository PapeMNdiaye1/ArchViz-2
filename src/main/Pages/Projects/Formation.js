import { React, useEffect, useState, Fragment } from 'react';

import ImageFormation1 from '../../Style/Images/SVG/Formation-1.png';
import ImageFormation2 from '../../Style/Images/SVG/Formation-2.png';
import ImageFormation3 from '../../Style/Images/SVG/Formation-3.png';

function SmallHouse1({ }) {
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

                    <div className='link'>
                        <em>
                        Voir Réalisation Sur
                        </em>
                        <br />
                        www.archviz-dakar.com
                    </div>
                    <div className='prix ins-prix'>
                        <em>
                        Inscription  
                        </em>
                        50.000 Fcfa
                    </div>
                    <div className='prix men-prix'>
                        <em>
                        Mensualite  
                        </em>
                        25.000 Fcfa
                    </div>
                 
                    <div className='phone'>
                        +221777278655 <br/>
                        +221777278655
                    </div>

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
                                  <img src={ImageFormation3} width='100%' />

                </div>


            </div>
        </Fragment>
    );
}




export default SmallHouse1;
// import { React, useEffect, useState, Fragment } from 'react';

// import ImageFormation1 from '../../Style/Images/SVG/Formation-1.png';
// import ImageFormation2 from '../../Style/Images/SVG/Formation-2.png';

// function SmallHouse1({ }) {
//     useEffect(() => {
//         let ToDisplayonBLoade = document.querySelector(".before-loader")
//         ToDisplayonBLoade.style.display = 'none';

//         let Page_slider = document.querySelector('.page_title_slider')
//         Page_slider.style.opacity = `0`

//         let AccueilContainer = document.querySelector(".App_container")
//         AccueilContainer.scrollTop = 0;

//         let hoverLoaderContainer = document.querySelector(".hover_loader_container")
//         hoverLoaderContainer.style.display = 'flex';

//         setTimeout(function () {
//             hoverLoaderContainer.style.display = '';
//         }, 1500);

//         return () => {
//             Page_slider.style.opacity = `1`;
//             ToDisplayonBLoade.style.display = 'flex';
//             AccueilContainer.scrollTop = 0;
//         }
//     }, []);


//     return (
//         <Fragment>

//             <div className='Formation'>

//                 <div className='formation_section_1'>
//                     <img src={ImageFormation1} width='100%' />

//                     <h1 className='project_title'>
//                         Formation en 3D
//                     </h1>   

//                     <h1 className='project_title-2'>
//                         Architecture visualisation
//                     </h1>

//                     <pre className='prix prix-Ins' >
//                         <em>Inscription</em> 50.000 Fcfa
//                     </pre>

//                     <pre className='prix prix-Mens' >
//                         <em>Mensualite</em> 25.000 Fcfa
//                     </pre>

//                     <pre className='Link' >
//                         <em>Plus d’infos sur</em> <br/>
//                         www.archviz-dakar.com
//                     </pre>

//                     <pre className='Phone' >
//                         +221 77 727 86 55 <br/>
//                         +221 77 727 86 55                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ;,
//                     </pre>

//                 </div>
//                 <div className='formation_section_2'>
//                     <img src={ImageFormation2} width='100%' />
//                     <h1 className='project_title'>
//                         Développer <br/>
//                         Vos Compétences <br/>
//                         En Visualisation <br/>
//                         Architecturale 3D
//                     </h1>
//                     <p>
//                         Une formation complete de 4 mois de comportent <br />
//                         des cour live sur Discord un canale question<br />
//                         ouvert h24 et de resouse gratuit (SetUp logiciels,<br />
//                         Models 3D , HDRI , PBR . . .)
//                     </p>
//                 </div>
//                 <div className='formation_section_3'>
                  
//                           </div>


//             </div>
//         </Fragment>
//     );
// }




// export default SmallHouse1;
