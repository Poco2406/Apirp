import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import ForumDesAssociationsFrancoItaliennes from './pages/ForumDesAssociationsFrancoItaliennes';
import ActivitesCulturelles from './pages/ActivitesCulturelles';
import PromouvoirItalien from './pages/PromouvoirItalien';
import Actualite from './pages/Actualite';
import LiensContacts from './pages/LienContact';
import Programmes from './pages/Programmes';
import DevenirEnseignant from './pages/DevenirEnseignant';
import AnnalesBaccalaureat from './pages/AnnalesBaccalaureat';
import ItalienSecondaire from './pages/ItalienSecondaire';
import ItalienApresBac from './pages/ItalienApresBac';
import FicheAdhesion from './pages/FicheAdhesion';
import PourquoiQuiAdherer from './pages/PourquoiQuiAdherer';
import NousContacter from './pages/NousContacter';
import BulletinAssociation from './pages/BulletinAssociation';
import AssociationStatut from './pages/AssociationStatut';
import ElusCA from './pages/ElusCA';
import Calendrier from './pages/Calendrier';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route index element={<Accueil/>} />
        <Route path="/Accueil" element={<Accueil/>} />
        <Route path="/Forum" element={<ForumDesAssociationsFrancoItaliennes />} />
        <Route path="/ActivitesCulturelles" element={<ActivitesCulturelles/>}/>
        <Route path="/PromouvoirItalien" element={<PromouvoirItalien/>}/>
        <Route path="/Actualite" element={<Actualite/>}/>
        <Route path="/LiensContacts" element={<LiensContacts/>}/>
        <Route path="/Programmes" element={<Programmes/>}/>
        <Route path="/DevenirEnseignant" element={<DevenirEnseignant/>}/>
        <Route path="/AnnalesBaccalaureat" element={<AnnalesBaccalaureat/>}/>
        <Route path="/ItalienSecondaire" element={<ItalienSecondaire/>}/>
        <Route path="/ItalienApresBac" element={<ItalienApresBac/>}/>
        <Route path="/PourquoiQuiAdherer" element={<PourquoiQuiAdherer/>}/>
        <Route path="/FicheAdhesion" element={<FicheAdhesion/>}/>
        <Route path="/NousContacter" element={<NousContacter/>}/>
        <Route path="/ElusCA" element={<ElusCA/>}/>
        <Route path="/BulletinAssociation" element={<BulletinAssociation/>}/>
        <Route path="/AssociationStatut" element={<AssociationStatut/>}/>
        <Route path="/Calendrier" element={<Calendrier/>}/>

       
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;