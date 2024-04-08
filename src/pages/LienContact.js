import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import bandeauImage from '../images/bandeau.jpg';
import './DevenirEnseignant.css'; 

const LiensContacts = () => {
  return (
  <div>
    <Header/>
    <img src={bandeauImage} alt="Bandeau" />
    <div className="container">
  <h1>Liens et contacts</h1>
  <p> INSPECTRICE GÉNÉRALE
Madame Antonella DURAND

Adresse : 110 rue de grenelle 75357 Paris SP 07

Tél : 01 55 55 10 10

Courriel : antonella.durand@education.gouv.fr



IA – IPR académie de Paris
Madame Odile PAGLIARI

Adresse : Rectorat de l’Académie de Paris, 12 boulevard d’Indochine 75019 Paris

Courriel : odile.pagliari@ac-paris.fr </p>

  </div>
  <Footer/>
  </div>
  );
  
};

export default LiensContacts;