import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import bandeauImage from '../images/bandeau.jpg';
import './DevenirEnseignant.css'; 

const ElusCA = () => {
  return (
  <div>
    <Header/>
    <img src={bandeauImage} alt="Bandeau" />
    <div className="container">
  <h1>Les élus du C.A.</h1>

  <h1>Membres du C.A. et du Bureau élus le 16 mars 2019</h1>
  <br/><br/><br/><br/>
  <p> <strong>Président : </strong>Olivier Morin
<br/><br/>
<strong>Vice-Présidente :</strong>Ilaria Madonna
<br/><br/>
<strong>Secrétaire :</strong> Estelle Paint
<br/><br/>
<strong>Trésorière : </strong>Valérie Guillouet
<br/><br/>
<strong>Correspondante APIRP pour l'académie de Paris : </strong>Alexandra Martinez
<br/><br/>
<strong>Correspondant APIRP pour l'académie de Créteil : </strong>Graziano Tassi
<br/><br/>
<strong>Correspondante APIRP pour l'académie de Versailles : </strong>Charlotte Ostrovsky-Richard
<br/><br/>
<strong>Secrétaire adjointe + correspondante “CPGE”: </strong>Gabrielle Kerleroux
<br/><br/>
<strong>Trésorière adjointe : </strong>Patrizia Bisson
<br/><br/>
<strong>Webmestre : </strong>Maria Letizia Gabanini 
<br/><br/>
<strong>Contacts avec les associations italiennes de l'Île-de-France : </strong>Patrizia Bisson et Alexandra Martinez
<br/><br/>
<strong>Contact avec les Universités: </strong>Graziano Tassi
<br/><br/>
<strong>Contact avec l'IIC et le Consulat : </strong>Olivier Morin - Ilaria Madonna 
<br/><br/>
<strong>Redactrice en chef du Bulletin : </strong>Charlotte Ostrovsky-Richard
<br/><br/>
<strong>Directeur artistique du Bulletin: </strong>Francesco Forlani
<br/><br/><br/><br/>
 

<strong>Présidents Honoraires : </strong>
<br/><br/>
Madame Anne Mazire
<br/><br/>
<strong>Membre honoraire:</strong>
<br/><br/>
Ketty Zanforlini</p>

  </div>
  <Footer/>
  </div>
  );
  
};

export default ElusCA;