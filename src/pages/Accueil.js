import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import bandeauImage from '../images/bandeau.jpg';
import './Accueil.css';

const Actualite = "Actualite";
const ActivitesCulturelles = "ActivitesCulturelles";

const Accueil = () => {
  return (
    <div>
      <Header />
        <img src={bandeauImage} alt="Bandeau" />
        <div className="container">
        <h1>Association des Professeurs d'Italien de la Région Parisienne</h1>
        <p><strong>Bienvenue sur le site de l'Association des Professeurs d'Italien de la Région Parisienne</strong></p>
        <p>Notre association a pour vocation:</p>
        <ul>
          <li>d’établir et développer des liens de solidarité et d’amitié entre les italianistes de la région parisienne ;</li>
          <li>de renseigner les professeurs d’italien à tous niveaux sur la diffusion de l’enseignement de l’italien en région parisienne ;</li>
          <li>de promouvoir l’enseignement de l’italien.</li>
        </ul>
        <p><strong>Pour nous contacter :</strong> apirp.association@gmail.com</p>
        <h1>A LA UNE....</h1>
        <p>N’hésitez pas à vous rendre sur la page de nos <a href={Actualite}>Actualités, dal Web</a>  et  <a href={ActivitesCulturelles}>Activités culturelles</a> afin d’être toujours au fait des prochains évènements !</p>
      </div>
      <Footer />
    </div>
  );
};

export default Accueil;