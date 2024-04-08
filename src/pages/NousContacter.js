import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import bandeauImage from '../images/bandeau.jpg';
import './DevenirEnseignant.css'; 

const NousContacter = () => {
  return (
  <div>
    <Header/>
    <img src={bandeauImage} alt="bandeau" />
    <div className="container">
  <h1>Nous contacter</h1>
  <h2>Adresse mail:</h2>
  <p>apirp.association@gmail.com</p>

  <p>Pour nous signaler tout changement de coordonnées personnelles (adresse de domicile, téléphone, courriel) ou professionnelles (changement d’établissement de rattachement, de statut, etc.), merci d’envoyer un courriel à :<strong> apirp.association@gmail.com.</strong> 

Pour les renouvellement d’adhésion et pour les commandes de plaquettes pour la promotion de l’italien, nos adhérents peuvent aussi se servir des formulaires publiés dans les deux dernières page de notre bulletin annuel.</p>

  <h2>Facebook:</h2>

  <p>Si vous souhaitez nous suivre :
<br/>
<a href='https://m.facebook.com/APIRP' target='blank'>https://m.facebook.com/APIRP</a></p>

</div>
  <Footer/>
  </div>
  );
  
};

export default NousContacter;