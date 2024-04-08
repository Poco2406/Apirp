import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import bandeauImage from '../images/bandeau.jpg';
import VivaDante from '../images/VivaDante.png';
import musicien from '../images/musicien.jpeg';
import Italissimo from '../images/italissimo.jpeg';
import './ActivitesCulturelles.css'; 


const ActivitesCulturelles = () => {
  
  return (

    <div>
      <Header/>
      <img src={bandeauImage} alt="Bandeau" />
      <div className="container">
      <h1>Activités culturelles</h1>
    
      <h1>Concours Dante Dì</h1>
      <div className="small-image">
      <img src={VivaDante} alt="Vivadante" />
      </div>
      <br/><br/>
      <p>Le Consulat Général d’Italie à Paris, en collaboration avec l’Institut Culturel Italien de Paris, lance le concours DANTE DÌ à l’occasion du Septième Centenaire de la mort de Dante, organisé par la Société Dante Alighieri - Comites.
<br/><br/>
Le concours est ouvert aux élèves italianistes des écoles, collèges et lycées des académies de Paris, Versailles, Créteil, Amiens, Lille, Orléans-Tours, Normandie. Les participants devront élaborer une production en italien sur le thème « Etoiles et planètes chez Dante » : une vidéo, un audio ou encore un récit ou essai illustré.
<br/><br/>
Les établissements scolaires sont invités à participer nombreux. Ils devront déposer leur dossier d’inscription par mail avant le 21 mars 2021.
<br/><br/>
Les élèves et l’enseignant vainqueurs du premier prix gagneront un voyage à Ravenna, avec accès gratuit au musée Dante et participation comme lecteurs à l’initiative "L’ora che volge il disio", lecture perpétuelle de la Divina Commedia devant le Tombeau de Dante.
<br/><br/>
Vous trouverez ci joint le règlement du concours, toutes les précisions utiles pour le retour des propositions ainsi que le bulletin d’inscription. </p>

<h1>In Maggiore: Paolo Fresu et Daniele di Bonaventura en concert à l’IIC Paris</h1>

<div className="small-image" style={{marginBottom: '100px'}}>
<img src={musicien} alt="musicien" />
</div>
<p>Mercredi  21 Oct 2020 de 19h à 20h30, l'IIC (50, rue de Varenne) nous invite au concert de Paolo Fresu et Daniele di Bonaventura.

Paolo Fresu est l’un des plus grands trompettistes de jazz d’aujourd’hui. Le musicien sarde est célèbre dans le monde entier pour sa musique éclectique et inspirée, tel un artiste prolifique aux multiples inspirations. À l’occasion de ce concert, il sera accompagné par le bandonéoniste italien Daniele di Bonaventura dont les collaborations vont de la musique classique à la musique contemporaine, du jazz au tango, du monde du cinéma à la danse-théâtre. 

Découvrez le canal YouTube de Paolo Fresu : <a href='https://www.youtube.com/c/paolofresuofficial' target='blank'a>https://www.youtube.com/c/paolofresuofficial</a></p>

<h1>Sicilia, Tunisia, ...</h1>

<p>Sur scène à Nanterre, "Sicilia". Ce spectacle a été joué plus de 140 fois, traduit en italien et anglais, et joué en France et à l'étranger (Suède, Grande Bretagne, Italie, Etats-Unis). Cette fois le spectacle sera joué avec les autres éléments du puzzle que constitue l'histoire des migrations dans la famille de Clyde Chabot dans le cadre d'un triptyque : SICILIA, TUNISIA, CHICAGO-reconstitution. "Ses ancêtres ont quitté la Sicile à la fin du XIXè siècle, une branche pour la Tunisie, une autre pour les Etats-Unis. Toutes deux se sont perdues de vue."  

Un quatrième spectacle, "Fille de militaire", est présenté dans le cadre d'une intégrale des solos et duos de Clyde Chabot en binôme avec un musicien. 

 Les représentations de ces 4 formes courtes auront lieu à La Ferme du bonheur, lieu insolite situé sur le campus universitaire à Nanterre le samedi 10 et dimanche 11 octobre à partir de 18h30. CHICAGO-reconstitution et Fille de militaire seront représentés jeudi 15 et vendredi 16 octobre à 20h30. 
<br/><br/>
Source : <a href='https://www.italieaparis.net/actualite/news/sicilia-tunisia-l-integrale-des-solos-et-duos-de-clyde-chabot-17390/' target='blank'>https://www.italieaparis.net/actualite/news/sicilia-tunisia-l-integrale-des-solos-et-duos-de-clyde-chabot-17390/</a></p>

<h1>Italissimo 2020</h1>

<div className="small-image" style={{marginBottom: '100px'}}>
<img src={Italissimo} alt="italisimo"/>
</div>
<p>« Nous avons décidé d’y croire, de travailler jusqu’au bout pour maintenir le festival, de nous adapter à la situation » écrivent les organisateurs.

La cinquième édition d’ITALISSIMO, le festival de littérature et culture italiennes, qui devait se tenir en avril, aura lieu du 8 au 13 octobre 2020.

Découvrez le programme sans tarder et réservez vos place sur le site de l'événement : <a href='http://www.italissimofestival.com/' target='blank'>http://www.italissimofestival.com/</a></p>
    </div>
      <Footer/>
    </div>

  )
  
  
};

export default ActivitesCulturelles;