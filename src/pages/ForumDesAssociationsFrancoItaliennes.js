import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import bandeauImage from '../images/bandeau.jpg';
import NecessiteVirtuel from '../images/NecessiteVirtuel.jpeg';
import ProgrammeDimanche from '../images/ProgrammeDimanche.jpeg';
import ProgrammeSamedi from '../images/ProgrammeSamedi.jpeg';
import './ForumDesAssociationsFrancoItaliennes.css'; 

const ForumDesAssociationsFrancoItaliennes = () => {
  return (
    <div>
      <Header/>
        <img src={bandeauImage} alt="Bandeau" />
        <div className="container">
        <h1>Forum des associations franco-italiennes</h1>

        <img src={NecessiteVirtuel} alt="NecessiteVirtuel" className="small-image centered-image" />
        <h1>Forum des associations italiennes virtuel : APIRP 2020</h1>

        <p>Le forum des associations franco-italiennes initialement prévu place Baudoyer à Paris, se déroulera cette année de façon virtuelle le 20 et 21 juin 2020. L' APIRP participera avec une intervention de Olivier Morin et Ilaria Madonna, président et vice-présidente de l'association, le samedi 20 juin de 16h30 à 16h50. Pour l'occasion Ilaria Madonna a créé un padlet pour illustrer les projets menés par l'APIRP, intitulé APIRP 2020. Vous y trouverez des renseignements sur la diffusion de l'enseignement de l'italien dans les trois académies franciliennes, des documents pour la promotion de notre belle langue, une vidéo pour présenter le bilan des activités de l'APIRP de cette année, le dossier ESABAC, le programme du concours de recrutement ainsi que des projets menés par nos adhérents. Voici le lien :  <a href="https://padlet.com/apirpassociation/apirp-2020-mi81d9fw83c305up?utm_campaign=transactional&utm_content=padlet_url&utm_medium=email&utm_source=started_a_padlet" target='blank'>https://padlet.com/apirpassociation/apirp2020 </a></p>
        <br/>
        <p>L'intégralité du forum sera retransmise sur la page Facebook du Forum des Associations italiennes.</p>
        
        <img src={ProgrammeDimanche} alt="ProgrammeDimanche" />
        <img src={ProgrammeSamedi} alt="ProgrammeSamedi" />
      </div>
      <Footer/>
    </div>
  );
};

export default ForumDesAssociationsFrancoItaliennes;
