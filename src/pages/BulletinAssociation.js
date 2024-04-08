import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import bandeauImage from '../images/bandeau.jpg';
import './DevenirEnseignant.css'; 

const BulletinAssociation = () => {
  return (
  <div>
    <Header/>
    <img src={bandeauImage} alt="Bandeau" />
    <div className="container"> 
    <h1>Les bulletins de l'association</h1>
    <h4>Si vous souhaitez commander l'un de ces bulletin vous pouvez envoyer un chèque de 4 € à l'ordre de l'APIRP à l'adresse suivante : Mme Valérie GUILLOUET - 10, rue Blondel - 92400 COURBEVOIE</h4>

  </div>
  <Footer/>
  </div>
  );
  
};

export default BulletinAssociation;