import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import bandeauImage from '../images/bandeau.jpg';
import FicheAdhesion from './FicheAdhesion';
import './PourquoiQuiAdherer.css';

const PourquoiQuiAdherer= () => {
  return (
  <div>
    <Header/>
    <img src={bandeauImage} alt="Bandeau" />
    <div className="container"> 
  <h1>Pourquoi et qui peut adhérer</h1>
  <h1>Pourquoi adhérer?</h1>

  <p>Pour:
<br/><br/>
<ul>
<li>Participer activement aux assemblées générales.</li><br/>
<li>Recevoir chaque année le bulletin imprimé de l’association et les plaquettes gratuites pour la promotion de l’italien.</li><br/>
<li>Soutenir des initiatives pour la promotion de l’enseignement de l’italien en île-de-France :</li>
</ul>

- la réalisation de ce site, conçu comme un outil de partage et de renseignement pour tous les professeurs d’italien de l’île-de-France ;

- la réalisation et l’impression de plaquettes pour la promotion de l’italien

- notre présence lors des manifestations et des évènements culturels (tels que La festa del libro e della cultura italiana ou le Forum des associations franco-italiennes, etc)

<ul>

<li>Connaître le réseaux des professeurs d’italien de la Région Parisienne.</li><br/>
<li>Pouvoir être représenté et soutenu, en toutes circonstances et auprès des instances officielles, par une association reconnue.</li><br/>
<li>L’union faisant la force, l’A.P.I.R.P. est un moyen pour ne pas rester isolé et avoir des échanges actifs sur notre métier.</li>

</ul></p>

<h1>Qui peut adhérer</h1>

<p>Peuvent faire partie de l’Association tous les professeurs d’italien de la région parisienne en activité ou à la retraite, quel que soit l’ordre d’enseignement auquel ils appartiennent.
<br/><br/>
Comment adhérer
<br/><br/>
Pour devenir membres il faut : remplir une fiche d’inscription ET verser annuellement une cotisation, dont le montant est fixé chaque année par le Conseil d’administration.
<br/><br/>
À ce sujet veuillez consulter la page suivante :<a href={FicheAdhesion} >https://sites.google.com/view/apirp/adh%C3%A9rer/fiche-dadh%C3%A9sion</a></p>

</div>
  <Footer/>
  </div>
  );
  
};

export default PourquoiQuiAdherer;