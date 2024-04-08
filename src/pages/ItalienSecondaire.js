import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import bandeauImage from '../images/bandeau.jpg';
import './DevenirEnseignant.css'; 

const ItalienSecondaire = () => {
  return (
    <div>
      <Header/>
      <img src={bandeauImage} alt="Bandeau" />
      <div className="container"> 
      <h1>L'italien dans le secondaire</h1>
      
      <p>Nous pouvons vous proposer les listes qui suivent grâce à l'aimable contribution de Mme Pagliari, IA-IPR de l'académie de Paris, de Mme Cutino, IA-IPR de l'académie de Créteil et de M. Cherki, IA-IPR de l'académie de Versailles.</p>
      
      <h2>Académie de Paris</h2>
      
      <p>texte sur l'academie</p>
      
      <h2>Académie de Créteil</h2>
      
      <p>texte sur l'academie</p>

      <h2>Académie de Versailles</h2>
      
      <p>texte sur l'academie</p>
      </div>
      <Footer/>
    </div>
  );
};

export default ItalienSecondaire;
