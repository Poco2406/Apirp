import React from 'react';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        bgcolor: '#c70e0e',
        color: '#ffff',
        textAlign: 'center',
        bottom: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      }}
    >
      <div>
      <Typography variant="h5" color="inherit"><Link to="../Accueil" style={{ textTransform: 'none', color: 'white', textDecoration: 'none' }}>APIRP</Link></Typography>
        <Typography variant="subtitle1" color="inherit">
          apirp.association@gmail.com
        </Typography>
      </div>

      {/* Première colonne */}
      <div>
        <Breadcrumbs aria-label="breadcrumb" onClick={handleClick}>
          
          <Typography color="inherit"><Link to="../Accueil" style={{ textTransform: 'none', color: 'white', textDecoration: 'none' }}>Accueil</Link></Typography>
        </Breadcrumbs>
        <Breadcrumbs aria-label="breadcrumb" onClick={handleClick}>
          <Typography color="inherit"><Link to="../Forum"style={{ textTransform: 'none', color: 'white', textDecoration: 'none' }}>Forum</Link></Typography>
        </Breadcrumbs>
        <Breadcrumbs aria-label="breadcrumb" onClick={handleClick}>
          <Typography color="inherit"><Link to="../ActivitesCulturelles"style={{ textTransform: 'none', color: 'white', textDecoration: 'none' }}>Activites Culturelles</Link></Typography>
        </Breadcrumbs>
      </div>

      {/* Deuxième colonne */}
      <div>
        <Breadcrumbs aria-label="breadcrumb" onClick={handleClick}>
          <Typography color="inherit"><Link to="../NousContacter"style={{ textTransform: 'none', color: 'white', textDecoration: 'none' }}>Nous connaître</Link></Typography>
        </Breadcrumbs>
        <Breadcrumbs aria-label="breadcrumb" onClick={handleClick}>
          <Typography color="inherit"><Link to="../PourquoiQuiAdherer"style={{ textTransform: 'none', color: 'white', textDecoration: 'none' }}>Adhérer</Link></Typography>
        </Breadcrumbs>
        <Breadcrumbs aria-label="breadcrumb" onClick={handleClick}>
          <Typography color="inherit"><Link to="../PromouvoirItalien"style={{ textTransform: 'none', color: 'white', textDecoration: 'none' }}>Promouvoir l'italien</Link></Typography>
        </Breadcrumbs>
      </div>

      {/* Troisième colonne */}
      <div>
        <Breadcrumbs aria-label="breadcrumb" onClick={handleClick}>
          <Typography color="inherit"><Link to="../ItalienSecondaire"style={{ textTransform: 'none', color: 'white', textDecoration: 'none' }}>Apprendre</Link></Typography>
        </Breadcrumbs>
        <Breadcrumbs aria-label="breadcrumb" onClick={handleClick}>
          <Typography color="inherit"><Link to="../DevenirEnseignant"style={{ textTransform: 'none', color: 'white', textDecoration: 'none' }}>Enseigner</Link></Typography>
        </Breadcrumbs>
        <Breadcrumbs aria-label="breadcrumb" onClick={handleClick}>
          <Typography color="inherit"><Link to="../Actualite"style={{ textTransform: 'none', color: 'white', textDecoration: 'none' }}>Divers</Link></Typography>
        </Breadcrumbs>
      </div>
    </Box>
  );
}