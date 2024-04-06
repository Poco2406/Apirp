import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
  <div className='Header'>
    <header>
        <nav>
            <ul>
                <li><Link to="../Accueil">Accueil</Link></li>
                <li><Link to="../ForumDesAssociationsFrancoItaliennes">Forum Des Associations Franco-Italiennes</Link></li>
                <li><Link to="/ActivitesCulturelles">Activités Culturelles</Link></li>
                <li><Link to="/NousConnaitre">Nous connaître</Link></li>
                <li><Link to="/Adherer">Adhérer</Link></li>
                <li><Link to="/PromouvoirItalien">Promouvoir l'italien</Link></li>
                <li><Link to="/Apprendre">Apprendre</Link></li>
                <li><Link to="/Enseigner">Enseigner</Link></li>
                <li><Link to="/Divers">Divers</Link></li>
               
            </ul>
        </nav>
    </header>

  </div>
  );
  
};


