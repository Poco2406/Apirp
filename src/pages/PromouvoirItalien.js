import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import bandeauImage from '../images/bandeau.jpg';
import './DevenirEnseignant.css'; 


const PromouvoirItalien = () => {
  return (
    <div>
      <Header/>
      <img src={bandeauImage} alt="Bandeau" />
      <div className="container"> 
    
      <h1>Promouvoir l'italien</h1>
      
      <h2>La plaquette éditée par l'APIRP</h2>
      <p>L'APIRP a édité un dépliant pour la promotion de l'apprentissage de la langue italienne dans les établissements scolaires de l'Île-de-France.</p>
      </div>
      <Footer/>
    </div>
  );
};

export default PromouvoirItalien;
