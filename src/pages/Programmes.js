import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Link from '@mui/material/Link'; 
import bandeauImage from '../images/bandeau.jpg';
import './DevenirEnseignant.css'; 

const Programmes = () => {
  return (
    <div>
      <Header/>
      <img src={bandeauImage} alt="Bandeau" />
      <div className="container"> 
      <h1>PROGRAMMES LYCÉE 2019</h1>

      <p><strong>Les nouveaux programmes définitifs du Lycée sont parus:</strong></p>

      <p>
        <Link href="http://www.education.gouv.fr/pid285/bulletin_officiel.html?pid_bo=38502&utm_source=email&utm_medium=nl&utm_content=&utm_campaign=Hatier_Sco_NL_r%C3%A9formeetprogrammes2019" target="_blank" rel="noopener noreferrer">
          Pour les consulter
        </Link>
      </p>
      </div>
      <Footer/>
    </div>
  );
};

export default Programmes;
