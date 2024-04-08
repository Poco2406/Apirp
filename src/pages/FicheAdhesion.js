import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import bandeauImage from '../images/bandeau.jpg';
import './DevenirEnseignant.css'; 

const FicheAdhesion = () => {
  const fichierGoogleDrive = 'https://drive.google.com/uc?id=1mPPoxuGEfqQwXtS9STAszxczkeL-Vd_6';

  return (
    <div>
      <Header/>
      <img src={bandeauImage} alt="Bandeau" />
      <div className="container"> 
      <h1>Fiche d'adhésion</h1>
      
      <p>
        Pour adhérer à l'association, téléchargez la fiche suivante et retournez-la à l'adresse qui y est indiquée :
        <br />
        <a href={fichierGoogleDrive} download>Télécharger la fiche d'adhésion</a>
      </p>
    
    </div>
      <Footer/>
    </div>
  );
};

export default FicheAdhesion;
