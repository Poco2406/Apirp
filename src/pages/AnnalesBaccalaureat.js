import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import bandeauImage from '../images/bandeau.jpg';
import './DevenirEnseignant.css'; 

const AnnalesBaccalaureat = () => {
    return (
      <div>
        <Header/>
          <img src={bandeauImage} alt="Bandeau" />
          <div className="container">
          <h1>Annales Baccalaureat</h1>
          <h4>BAC d'Italien- Sujets juin 2018</h4>
          <h4>Général LV1 et LV2 - métropole</h4>
        </div>
        <Footer/>
      </div>
    );
  };

export default AnnalesBaccalaureat;
