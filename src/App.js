import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import ForumDesAssociationsFrancoItaliennes from './pages/ForumDesAssociationsFrancoItaliennes';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Accueil/>} />
        <Route path="/forum" element={<ForumDesAssociationsFrancoItaliennes />} />

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;