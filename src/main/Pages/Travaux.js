import { React, useEffect } from 'react';
import { OneBigProject } from './Accueil';

import ImageProjectA1 from '../Style/Images/Project/Exterior-1.jpg';
import ImageProjectB1 from '../Style/Images/Project/City-2.jpg';
import ImageProjectC3 from '../Style/Images/Project/Interior-1-3.jpg';
import ImageProjectD3 from '../Style/Images/Project/NFT-3.jpg';
import ImageProjectE4 from '../Style/Images/Project/Pharmacie-3.jpg';
import ImageProjectF2 from '../Style/Images/Project/Hangar-2.jpg';
import ImageProjectG1 from '../Style/Images/Project/MSAD_2.jpg';


import ImageProjectH1 from '../Style/Images/Project/Villa_Astan-Ndiaye-1.jpg';
import ImageProjectI2 from '../Style/Images/Project/Villa_B-2.jpg';
import ImageProjectJ1 from '../Style/Images/Project/Appartement-F4-A-1.jpg';
import ImageProjectK4 from '../Style/Images/Project/Pharmacie_C-4.jpg';
import ImageProjectL1 from '../Style/Images/Project/Villa_Teranga_Al_Amin-1.jpg';

function Travaux() {

    useEffect(() => {

        let Page_slider = document.querySelector('.page_title_slider')
        Page_slider.style.top = `-100%`

        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;

        let hoverLoaderContainer = document.querySelector(".hover_loader_container")
        hoverLoaderContainer.style.display = 'flex';


        setTimeout(function () {
            hoverLoaderContainer.style.display = '';
        }, 1500);

        let TheFooter = document.querySelector(".the_footer")
        TheFooter.style.opacity = '1';

        return () => {

        }
    }, []);


    return (
        <div id="Travaux">
            <section className='Travaux-Header'>
                <h1 className='visualization-projects'>
                    Nos Réalisations
                </h1>
                <p className='visualization-projects-description'>
                    Nous aidons les architectes et les promoteurs immobiliers à impressionner les investisseurs et les acheteurs grâce à des visuels professionnels. <br />
                    Nos visualisations photoréalistes font profiter aux professionnels de l’immobilier d’une large visibilité dans la mesure où elle permet de visualiser un projet avant sa réalisation.Ainsi, elles suscitent l’intérêt des clients cibles et convainquent les éventuels acheteurs. En d’autres termes, nous contribuons a de donner vie à vos projets ou produits.
                </p>
            </section>
            <section className='AccueilBigProjectsSection'>
                <OneBigProject title={'Villa Teranga'} image={ImageProjectH1}
                    description={"Des designs Modernes, épurés, minimalistes etc.… nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs. Pour se faire nous utilisons différents logiciels avec les dernières innovations pour des rendus d’images à la fois réalistes et immersives."}
                    color={'#4c525c'} textcolor={'#f1f1f1'} theKey={1} link={'/Villa'} side={'left'} The_Experience={true} The_Experience_Link={'https://archviz-villa-astan.netlify.app/'} />

                <OneBigProject title={'Décoration Interieur'} image={ImageProjectC3}
                    description={'À l\'aide des logiciels de dernière génération et de notre savoir-faire dans le domaine de l’architecture d’intérieur. Nous vous aidons dans l’aménagement de vos espaces.'}
                    color={'#F1F1F1'} textcolor={'#222'} theKey={2} link={'/Interior1'} side={'right'} The_Experience={true} The_Experience_Link={'https://papemndiaye1.github.io/ArchViz_Interior_Design_1/'} />

                <OneBigProject title={'Cité El Hadj Amadou BA'} image={ImageProjectB1}
                    description={"Ce projet comprend des villas familiales, des bâtiments commerciaux et résidentiels ainsi que des lieux publics. Notre travail se partage à parts égales entre les animations architecturales et les rendus 3D. Nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs."}
                    color={'#EAEAEA'} textcolor={'#222'} theKey={3} link={'/City1'} side={'left'} The_Experience={false} />

                <OneBigProject title={'Décoration Intérieur'} image={ImageProjectJ1}
                    description={"À l'aide des logiciels de dernière génération et de notre savoir-faire dans le domaine de l’architecture d’intérieur. Nous vous aidons dans l’aménagement de vos espaces."}
                    color={'#8a6f54'} textcolor={'#f1f1f1'} theKey={4} link={'/Appartement-F4-A'} side={'right'} The_Experience={true} The_Experience_Link={'https://archviz-villa-bamba-ba.netlify.app/'} />

                <OneBigProject title={'Design de Maison Moderne'} image={ImageProjectA1}
                    description={"Des designs Modernes, épurés, minimalistes etc.… nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs. Pour se faire nous utilisons différents logiciels avec les dernières innovations pour des rendus d’images à la fois réalistes et immersives."}
                    color={'#93A490'} textcolor={'#222'} theKey={5} link={'/SmallHouse1'} side={'left'} The_Experience={false} />

                <OneBigProject title={'Design pour les Commerces'} image={ImageProjectE4}
                    description={'Nous avons une grande expérience dans l’agencement de point de vente, et l’aménagement de bureaux. Quelle que soit la typologie du point de vente, sa vocation, sa stratégie et son positionnement.'}
                    color={'#F4EFE4'} textcolor={'#222'} theKey={6} link={'/Pharmacie1'} side={'right'} The_Experience={false} />


                <OneBigProject title={'Visualisation de projets immobiliers'} image={ImageProjectL1}
                    description={"Les visites virtuelles offrent de nombreux avantages pour les acheteurs, propriétaires et agents immobiliers. Pour les acheteurs, elles permettent de visualiser les propriétés sans se déplacer. Pour les agents immobiliers, elles peuvent diffuser les propriétés à plus de gens, ce qui peut conduire à une vente plus rapide..."}
                    color={'#664f3c'} textcolor={'#f1f1f1'} theKey={7} link={'/VillaTerangaAlAmin'} side={'left'}
                    The_Experience={true} The_Experience_Link={'https://archviz-villa-teranga-al-amine.netlify.app/'}
                />

                <OneBigProject title={'Espace Sportif'} image={ImageProjectK4}
                    description={"Nous avons une vaste expérience dans l'aménagement d'espaces communs et de bureaux, quelle que soit leur typologie, leur vocation, leur stratégie et leur positionnement."}
                    color={'#495D68'} textcolor={'#f1f1f1'} theKey={8} link={'/Gym'} side={'right'} The_Experience={false} />

                <OneBigProject title={'Maquette de la Grande Mosquée de Touba'} image={ImageProjectD3}
                    description={'Sur la base du matériel de briefing, nous créons des rendus ou croquis pour chaque image commandée.'}
                    color={'#DB9B18'} textcolor={'#222'} theKey={9} link={'/Touba'} side={'left'} The_Experience={false} />

                <OneBigProject title={'Villa Saly'} image={ImageProjectI2}
                    description={"Des designs Modernes, épurés, etc…. nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs. Pour se faire nous utilisons différents logiciels avec les dernières innovations pour des rendus d’images à la fois réalistes et immersives."}
                    color={'#F1F1F1'} textcolor={'#222'} theKey={10} The_Experience={true} The_Experience_Link={'https://villa-r-1.netlify.app/'} link={'/Villa-Saly'} side={'right'} />


                <OneBigProject title={'La 3D dans le domaine des Industries'} image={ImageProjectF2}
                    description={"Le rendu et l'animation avec des temps de production de plus en plus rapide ont ouvert la porte à un monde de variations infinies dans la conception graphique adaptée à vos demandes uniques."}
                    color={'#F1F1F1'} textcolor={'#222'} theKey={11} link={'/Hangar1'} side={'left'} The_Experience={false} />

            </section>
        </div>
    );
}

export default Travaux;
