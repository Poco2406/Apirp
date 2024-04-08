import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import bandeauImage from '../images/bandeau.jpg';
import './DevenirEnseignant.css'; 

const Actualite = () => {
  return (
  <div>
     <Header/>
    <img src={bandeauImage} alt="Bandeau" />
    <div className="container">

  <h1>Actualités</h1>


  <p>La 5ème édition de la «Semaine de la Cuisine Italienne dans le Monde» se déroulera du lundi 23 novembre au dimanche 29 novembre 2020, et pour la France se poursuivra tout le mois de décembre. 

Promue en France par l’Ambassade d’Italie à Paris et le Consolato Generale d’Italia à Paris, en collaboration avec l’Institut du Commerce extérieur italien, l’Office National Italien du Tourisme, l’Institut Culturel Italien de Paris et l’Académie Italienne de la Cuisine, elle est riche d’événements. Cette année 2020, en raison de la situation sanitaire, ils se dérouleront en virtuel. </p>

<p><strong>Pour en savoir davantage :</strong></p>

<p>
  <a href="http://iicparigi.esteri.it/iic_parigi/resource/doc/2020/11/cuisinefr.pdf" target="_blank">Téléchargez ici le programme</a>
</p>
</div>
<Footer/>
  </div>
  );
  
};

export default Actualite;