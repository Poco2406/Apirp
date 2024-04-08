import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import bandeauImage from '../images/bandeau.jpg';
import './DevenirEnseignant.css'; 

const ItalienApresBac = () => {
  return (
    <div>
      <Header/>
      <img src={bandeauImage} alt="Bandeau" />
      <div className="container"> 
      <h1>L'italien après le bac</h1>
      
      <h2>ACADÉMIE DE PARIS UNIVERSITÉS</h2>
      <p>Université Paris 3 Sorbonne Nouvelle</p>
      <p>Site Internet : <a href="http://www.univ-paris3.fr" target="_blank">www.univ-paris3.fr</a></p>
      <p>Cursus proposés :</p>
      <ul>
        <li>Licence LLCER d'italien 
          <ul>
            <li>mineure interculturelle/monodisciplinaire</li>
            <li>mineure Communication</li>
            <li>mineure FLES</li>
            <li>mineure Etudes internationales</li>
            <li>mineure anglais (ouverture en L1 à la rentrée 2015)</li>
          </ul>
        </li>
        <li>Licences associées à une mineure d'italien :
          <ul>
            <li>Licence Sciences du Langage - mineure Langues et civilisations européennes (italien)</li>
            <li>Licence d'anglais - mineure italien</li>
          </ul>
        </li>
        <li>Master Études Italiennes (recherche)</li>
        <li>Master MEEF (Métiers de l'enseignement, de l'éducation et de la formation) parcours italien (préparation au Capes externe d'italien)</li>
        <li>Master pro Échanges culturels France-Italie (professionnel)</li>
        <li>Diplômes d'université :
          <ul>
            <li>DLCI (Diplôme de langue et de civilisation italienne)</li>
            <li>DLCR (Diplôme de langue et de civilisation roumaine)</li>
          </ul>
        </li>
      </ul>
      </div>
      <Footer/>
    </div>
  );
};

export default ItalienApresBac;
