import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Header() {

  const [anchorElEnseigner, setAnchorElEnseigner] = React.useState(null);
  const [anchorElDivers, setAnchorElDivers] = React.useState(null);
  const [anchorElApprendre, setAnchorElApprendre] = React.useState(null);
  const [anchorElAdherer, setAnchorElAdherer] = React.useState(null);
  const [anchorElNousConnaitre, setAnchorElNousConnaitre] = React.useState(null);

  const handleClickApprendre = (event) => {
    setAnchorElApprendre(event.currentTarget);
  };

  const handleClickEnseigner = (event) => {
    setAnchorElEnseigner(event.currentTarget);
  };

  const handleClickDivers = (event) => {
    setAnchorElDivers(event.currentTarget);
  };

  const handleClickAdherer = (event) => {
    setAnchorElAdherer(event.currentTarget);
  };

  const handleClickNousConnaitre = (event) => {
    setAnchorElNousConnaitre(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElEnseigner(null);
    setAnchorElDivers(null);
    setAnchorElApprendre(null);
    setAnchorElAdherer(null);
    setAnchorElNousConnaitre(null);
  };

  return (
    <div className='Header'>
      <header style = {{position: 'fixed',width: '100%',top: '0'}}>
          <nav className='navbar'>
              <ul>
                  <li>
                  <Button>
                    <Link to="../Accueil" className='navbar-logo' style={{ textTransform: 'none', color: 'white', textDecoration: 'none' }}>
                      APIRP
                    </Link>
                  </Button>
                </li>

                  <li><Button ><Link to="../Accueil" style={{ textTransform: 'none', color: 'white', textDecoration: 'none'  }}>Accueil</Link></Button></li>
                  <li><Button><Link to="../Forum" style={{ textTransform: 'none', color: 'white', textDecoration: 'none' }}>Forum Des Associations Franco-Italiennes</Link></Button></li>
                  <li><Button><Link to="/ActivitesCulturelles" style={{ textTransform: 'none', color: 'white', textDecoration: 'none' }}>Activités Culturelles</Link></Button></li>


                  {/*Dropdown Nous connaître */}
                 <li>
                    <Button
                      id="basic-button-nousconnaitre"
                      aria-controls={anchorElNousConnaitre ? 'basic-menu-nousconnaitre' : undefined}
                      aria-haspopup="true"
                      aria-expanded={anchorElNousConnaitre ? 'true' : undefined}
                      onClick={handleClickNousConnaitre}
                      style={{ textTransform: 'none', color: 'white' }}
                    >
                      Nous connaître
                    </Button>
                    
                    <Menu
                      id="basic-menu-nousconnaitre"
                      anchorEl={anchorElNousConnaitre}
                      open={Boolean(anchorElNousConnaitre)}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button-nousconnaitre',
                      }}
                    >
                      <MenuItem onClick={handleClose}><Link to="/AssociationStatut"  style={{ textTransform: 'none', color: 'black',textDecoration: 'none' }}>L'association et ses statuts</Link></MenuItem>
                      <MenuItem onClick={handleClose}><Link to="/ElusCA" style={{ textTransform: 'none', color: 'black',textDecoration: 'none' }}>Les élus du C.A</Link></MenuItem>
                      <MenuItem onClick={handleClose}><Link to="/BulletinAssociation" style={{ textTransform: 'none', color: 'black',textDecoration: 'none'}}>Les bulletins de l'association</Link></MenuItem>
                      <MenuItem onClick={handleClose}><Link to="/NousContacter" style={{ textTransform: 'none', color: 'black',textDecoration: 'none' }}>Nous contacter</Link></MenuItem>
                      
                    </Menu>
                  </li>


                 {/*Dropdown Adhérer */}
                 <li>
                    <Button
                      id="basic-button-adherer"
                      aria-controls={anchorElAdherer ? 'basic-menu-adherer' : undefined}
                      aria-haspopup="true"
                      aria-expanded={anchorElAdherer ? 'true' : undefined}
                      onClick={handleClickAdherer}
                      style={{ textTransform: 'none', color: 'white' }}
                    >
                      Adhérer
                    </Button>
                    
                    <Menu
                      id="basic-menu-adherer"
                      anchorEl={anchorElAdherer}
                      open={Boolean(anchorElAdherer)}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button-adherer',
                      }}
                    >
                      <MenuItem onClick={handleClose}><Link to="/PourquoiQuiAdherer" style={{ textTransform: 'none', color: 'black',textDecoration: 'none' }}>Pourquoi et qui peut adhérer</Link></MenuItem>
                      <MenuItem onClick={handleClose}><Link to="/FicheAdhesion" style={{ textTransform: 'none', color: 'black',textDecoration: 'none' }}>Fiche d'adhésion</Link></MenuItem>
                    </Menu>
                  </li>


                  <li><Button><Link to="/PromouvoirItalien" style={{ textTransform: 'none', color: 'white', textDecoration: 'none' }}>Promouvoir l'italien</Link></Button></li>


                  {/*Dropdown Apprendre */}
                  <li>
                    <Button
                      id="basic-button-apprendre"
                      aria-controls={anchorElApprendre ? 'basic-menu-apprendre' : undefined}
                      aria-haspopup="true"
                      aria-expanded={anchorElApprendre ? 'true' : undefined}
                      onClick={handleClickApprendre}
                      style={{ textTransform: 'none', color: 'white' }}
                    >
                      Apprendre
                    </Button>
                    
                    <Menu
                      id="basic-menu-apprendre"
                      anchorEl={anchorElApprendre}
                      open={Boolean(anchorElApprendre)}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button-apprendre',
                      }}
                    >
                      <MenuItem onClick={handleClose}><Link to="/ItalienSecondaire" style={{ textTransform: 'none', color: 'black',textDecoration: 'none' }}>L'italien dans le secondaire</Link></MenuItem>
                      <MenuItem onClick={handleClose}><Link to="/ItalienApresBac" style={{ textTransform: 'none', color: 'black',textDecoration: 'none' }}>L'italien après le bac</Link></MenuItem>
                    </Menu>
                  </li>


                   {/*Dropdown Enseigner */}
                  <li>
                    <Button
                      id="basic-button-enseigner"
                      aria-controls={anchorElEnseigner ? 'basic-menu-enseigner' : undefined}
                      aria-haspopup="true"
                      aria-expanded={anchorElEnseigner ? 'true' : undefined}
                      onClick={handleClickEnseigner}
                      style={{ textTransform: 'none', color: 'white' }}
                    >
                      Enseigner
                    </Button>
                    
                    <Menu
                      id="basic-menu-enseigner"
                      anchorEl={anchorElEnseigner}
                      open={Boolean(anchorElEnseigner)}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button-enseigner',
                      }}
                    >
                      <MenuItem onClick={handleClose}><Link to="/DevenirEnseignant" style={{ textTransform: 'none', color: 'black',textDecoration: 'none' }}>Devenir Enseignant</Link></MenuItem>
                      <MenuItem onClick={handleClose}><Link to="/AnnalesBaccalaureat" style={{ textTransform: 'none', color: 'black',textDecoration: 'none' }}>Annales Baccalauréat</Link></MenuItem>
                      <MenuItem onClick={handleClose}><Link to="/Programmes" style={{ textTransform: 'none', color: 'black',textDecoration: 'none' }}>Programmes</Link></MenuItem>
                    </Menu>
                  </li>

                    {/*Dropdown Enseigner */}
                  <li>
                    <Button
                      id="basic-button-divers"
                      aria-controls={anchorElDivers ? 'basic-menu-divers' : undefined}
                      aria-haspopup="true"
                      aria-expanded={anchorElDivers ? 'true' : undefined}
                      onClick={handleClickDivers}
                      style={{ textTransform: 'none', color: 'white' }} // Définir la couleur du texte sur blanc
                    >
                      Divers
                    </Button>
                    
                    <Menu
                      id="basic-menu-divers"
                      anchorEl={anchorElDivers}
                      open={Boolean(anchorElDivers)}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button-divers',
                      }}
                    >
                      <MenuItem onClick={handleClose}><Link to="/Actualite" style={{ textTransform: 'none', color: 'black',textDecoration: 'none' }}>Actualité</Link></MenuItem>
                      <MenuItem onClick={handleClose}><Link to="/LiensContacts" style={{ textTransform: 'none', color: 'black',textDecoration: 'none' }}>Liens et contacts</Link></MenuItem>
                      <MenuItem onClick={handleClose}><Link to="/Calendrier" style={{ textTransform: 'none', color: 'black',textDecoration: 'none' }}>Calendrier</Link></MenuItem>
                    </Menu>
                  </li>

              </ul>
          </nav>
      </header>
    </div>
  );
};
