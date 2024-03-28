import React from 'react';
import '../stijlen/navbar.css'
import  { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';





function Navbar() {


  const handleMenuStatus = () => setMenuStatus(!menuStatus);

  const [menuStatus, setMenuStatus] = useState(false);
  const [sieradenStatus, setSieradenStatus] = useState(false);
  const [oorbellenStatus, setOorbellenStatus] = useState(false);
  const [kettingenStatus, setKettingenStatus] = useState(false);
  const [ringenStatus, setRingenStatus] = useState(false);
  const [accesoiresStatus, setAccesoiresStatus] = useState(false);

  
  const handleClose = () => {
    setMenuStatus(false);
    setSieradenStatus(false);
    setOorbellenStatus(false);
    setKettingenStatus(false);
    setRingenStatus(false);
    setAccesoiresStatus(false);
  };

  const openSieradenMenu = () => setSieradenStatus(true);
  const sluitSieradenMenu = () => setSieradenStatus(false);
  
  const openOorbellenMenu = () => setOorbellenStatus(true);
  const sluitOorbellenMenu = () => setOorbellenStatus(false);
  
  const openRingenMenu = () => setRingenStatus(true);
  const sluitRingenMenu = () => setRingenStatus(false);
  
  const openKettingenMenu = () => setKettingenStatus(true);
  const sluitKettingenMenu = () => setKettingenStatus(false);

  const openAccesoiresMenu = () => setAccesoiresStatus(true);
  const sluitAccesoiresMenu = () => setAccesoiresStatus(false);

  return (
    <div>

{/* Eerste navbar */}
<nav className="navbar bg-body-tertiary navbar-expand-lg eerste-navbar fixed-top">
  <div className="container-fluid">

 {/* Zoekbalk voor grote schermen */}
<div className="container-zoekbalk grote-zoeker d-lg-block d-none">
  <div className="row">
    <div className="col-11">
      <form className="d-flex">
        <div className="input-group">
          <input className="form-control" type="search" placeholder="Zoek..." aria-label="Zoeken" />
          <button className="btn grote-zoek-knop" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    {/* Eerste navbar en hamburger */}
    <button className="navbar-toggler d-lg-none" type="button" onClick={handleMenuStatus} aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

    <a className="navbar-brand d-flex justify-content-center" href="./Probeersel">
      <img className="navbar-logo" src="../fotos/amorie-logo.png" alt="logo" />
    </a>

    {/* Hamburger toggler */}
    <div className="offcanvas offcanvas-start d-flex" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

       {/* Binnenkant hamburger */}
        <Offcanvas show={menuStatus} onHide={handleClose}>
        <Offcanvas.Header closeButton onClick={handleClose}>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>





          <ul>

          <li>Home</li>


          <li>Nieuw</li>



            <li>
              
            <button onClick={openSieradenMenu} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
  Sieraden
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
  </svg>
</button>
<Offcanvas show={sieradenStatus} onHide={sluitSieradenMenu} placement="start">
  <Offcanvas.Header  >
    <Offcanvas.Title onClick={sluitSieradenMenu} style={{ cursor: 'pointer' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>
      Sieraden
    </Offcanvas.Title>
    <button className="btn-close" onClick={handleClose} aria-label="Close"></button>
  </Offcanvas.Header>

                <Offcanvas.Body>
                <ul>
                <li>
  <button onClick={openOorbellenMenu} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
    Oorbellen
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  </button>
  <Offcanvas show={oorbellenStatus} onHide={sluitOorbellenMenu} placement="start">
    <Offcanvas.Header>
      <Offcanvas.Title onClick={sluitOorbellenMenu} style={{ cursor: 'pointer' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
        Oorbellen
      </Offcanvas.Title>
      <button className="btn-close" onClick={handleClose} aria-label="Close"></button>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <ul>
        <li>Alle oorbellen</li>
        <li>Hoops</li>
        <li>Oorringen & hangers</li>
        <li>Oorknopjes</li>
        <li>Doortrek oorbellen</li>
        <li>Ear Cuffs</li>
        <li>Piercings</li>
        <li>Sets</li>
        <li>Mix & match</li>
      </ul>
    </Offcanvas.Body>
  </Offcanvas>
</li>




<li>
  <button onClick={openKettingenMenu} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
    Kettingen
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  </button>
  <Offcanvas show={kettingenStatus} onHide={sluitKettingenMenu} placement="start">
    <Offcanvas.Header>
      <Offcanvas.Title onClick={sluitKettingenMenu} style={{ cursor: 'pointer' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
        Kettingen
      </Offcanvas.Title>
      <button className="btn-close" onClick={handleClose} aria-label="Close"></button>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <ul>
        <li>Alle kettingen</li>
        <li>Meerdere lagen</li>
      </ul>
    </Offcanvas.Body>
  </Offcanvas>
</li>






  <li>
  <button onClick={openRingenMenu} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
  <span style={{ marginRight: '8px' }}>Ringen</span>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
  </svg>
</button>

            


<Offcanvas show={ringenStatus} onHide={sluitRingenMenu} placement="start">
  <Offcanvas.Header >
    <Offcanvas.Title style={{ cursor: 'pointer' }} onClick={sluitRingenMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>
      Ringen
    </Offcanvas.Title>
    <button className="btn-close" onClick={handleClose} aria-label="Close"></button>
  </Offcanvas.Header>
  <Offcanvas.Body>
    <ul>
      <li>Alle ringen</li>
      <li>Zegelringen</li>
      <li>One size ringen</li>
      <li>Vintage look</li>
    </ul>
  </Offcanvas.Body>
</Offcanvas>
  </li>

  <li>Armbanden</li>
  <li>Enkelbandjes</li>
</ul>

                </Offcanvas.Body>
              </Offcanvas>
            </li>



            
            <li>
      <button onClick={openAccesoiresMenu} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '8px' }}>Accessoires</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
      <Offcanvas show={accesoiresStatus} onHide={sluitAccesoiresMenu} placement="start">
        <Offcanvas.Header >
          <Offcanvas.Title onClick={sluitAccesoiresMenu} style={{ cursor: 'pointer' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
            Accessoires
          </Offcanvas.Title>
          <button className="btn-close" onClick={handleClose} aria-label="Close"></button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li>petten</li>
            <li>Portemonnees</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </li>







            <li>Cadeauwinkel</li>
            <li>Collecties</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>    
    </div>






    {/* Aan de rechterkant groot scherm logo links */}
    <div className="d-none d-lg-flex align-items-center">
      <a href="favorieten.php" className="logo-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" className="bi bi-suit-heart" viewBox="0 0 16 16">
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
        </svg>
      </a>
      <a href="winkelwagen.php" className="logo-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" className="bi bi-bag" viewBox="0 0 16 16">
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
        </svg>
      </a>
      <a href="account.php" className="logo-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" className="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
      </a>
    </div>

    {/* Klein scherm logo links rechtsboven op het scherm */}
    <div className="d-flex align-items-center ms-auto d-lg-none sm-icons-container">
      <a href="favorieten.php" className="sm-navbar-icons">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-suit-heart" viewBox="0 0 16 16">
          <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
        </svg>
      </a>
      <a href="winkelwagen.php" className="sm-navbar-icons">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-bag" viewBox="0 0 16 16">
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
        </svg>
      </a>
      <a href="account.php" className="sm-navbar-icons">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
      </a>
    </div>
  </div>
</nav>

{/* Zoekbalk voor kleine en medium schermen */}
<div className="container-zoekbalk kleine-zoeker d-md-block d-lg-none">
  <div className="row">
    <div className="col-12">
      <form className="d-flex">
        <div className="input-group">
          <input className="form-control" type="search" placeholder="Zoek..." aria-label="Zoeken" />
          <button className="btn kleine-zoek-knop" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
{/* Tweede navbar voor desktop */}
<nav className="navbar navbar-expand-lg fixed-top bg-custom d-lg-block d-none tweede-navbar" id="navbar">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title mx-auto" id="offcanvasNavbarLabel">Amorie</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-links">

          
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="nieuw.php">Nieuw</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Sieraden
            </a>
            <ul className="dropdown-menu">
              <li><a href="" className="dropdown-item dropdown-toggle rechts">Oorbellen</a>
                <ul className="dropdown-menu submenu oorbellen">
                  <li><a href="oorbellen.php" className="dropdown-item">Alle oorbellen</a></li>
                  <li><a href="oorbellen.php?cat=hoops" className="dropdown-item">Hoops</a></li>
                  <li><a href="oorbellen.php?cat=oorringen-en-hangers" className="dropdown-item">Oorringen & hangers</a></li>
                  <li><a href="oorbellen.php?cat=oorknopjes" className="dropdown-item">Oorknopjes</a></li>
                  <li><a href="oorbellen.php?cat=doortrek-oorbellen" className="dropdown-item">Doortrek oorbellen</a></li>
                  <li><a href="oorbellen.php?cat=ear-cuffs" className="dropdown-item">Ear Cuffs</a></li>
                  <li><a href="oorbellen.php?cat=piercings" className="dropdown-item">Piercings</a></li>
                  <li><a href="oorbellen.php?cat=sets" className="dropdown-item">Sets</a></li>
                  <li><a href="oorbellen.php?cat=mix-en-match" className="dropdown-item">Mix &amp; match</a></li>
                </ul>
              </li>
              <li><a href="" className="dropdown-item dropdown-toggle rechts">Kettingen</a>
                <ul className="dropdown-menu submenu kettingen">
                  <li><a href="kettingen.php?cat=alle" className="dropdown-item">Alle kettingen</a></li>
                  <li><a href="kettingen.php?cat=meerdere-lagen" className="dropdown-item">Meerdere lagen</a></li>
                </ul>
              </li>
              <li><a href="#" className="dropdown-item dropdown-toggle rechts">Ringen</a>
                <ul className="dropdown-menu submenu ringen">
                  <li><a href="ringen.php?cat=alle" id="alle" className="dropdown-item">Alle ringen</a></li>
                  <li><a href="ringen.php?cat=zegel" id="zegel" className="dropdown-item">Zegelringen</a></li>
                  <li><a href="ringen.php?cat=onesize" id="onesize" className="dropdown-item">One size ringen</a></li>
                  <li><a href="ringen.php?cat=vintage" id="vintage" className="dropdown-item">Vintage look</a></li>
                </ul>
              </li>
              <li><a href="armbanden.php" className="dropdown-item">Armbanden</a></li>
              <li><a href="enkelbandjes.php" className="dropdown-item">Enkelbandjes</a></li>
            </ul>
          </li>
          {/* Accessoires dropdown */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="accessoiresDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Accessoires
            </a>
            <ul className="dropdown-menu" aria-labelledby="accessoiresDropdown">
              <li><a className="dropdown-item" href="sieraden.php">Alle Accessoires</a></li>
              <li><a className="dropdown-item" href="armbanden.php">Haaraccessoires</a></li>
              <li><a className="dropdown-item" href="enkelbandjes.php">Telefoon Accessoires</a></li>
              <li><a className="dropdown-item" href="oorbellen.php">Schipperspetten &amp; Baretten</a></li>
              <li><a className="dropdown-item" href="ringen.php">Tassen &amp; Portemonnees</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="cadeauwinkel.php">Cadeauwinkel</a>
          </li>
{/* Collecties dropdown */}
<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" id="collecties-submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Collecties
  </a>
  <ul className="dropdown-menu multi-column" aria-labelledby="collecties-submenu">
    <li><a className="dropdown-item" href="sieraden.php">Alle Collecties</a></li>
    <li><a className="dropdown-item" href="armbanden.php">Tell me your name</a></li>
    <li><a className="dropdown-item" href="enkelbandjes.php">Year Of Birth</a></li>
    <li><a className="dropdown-item" href="oorbellen.php">Mixed Symbols</a></li>
    <li><a className="dropdown-item" href="ringen.php">Your favorite destination</a></li>
    <li><a className="dropdown-item" href=".php">Classy Pearl</a></li>
    <li><a className="dropdown-item" href=".php">You name it</a></li>
    <li><a className="dropdown-item" href=".php">Kind words</a></li>
    <li><a className="dropdown-item" href=".php">Asymmetrical symbols</a></li>
    <li><a className="dropdown-item" href=".php">Shine on with zirconia</a></li>
    <li><a className="dropdown-item" href=".php">Shine on with zirconia stud</a></li>
    <li><a className="dropdown-item" href=".php">Daisy & Butterfly</a></li>
    <li><a className="dropdown-item" href=".php">Fresh Vibes</a></li>
    <li><a className="dropdown-item" href=".php">(Sea) Animals</a></li>
    <li><a className="dropdown-item" href=".php">Galaxy</a></li>
    <li><a className="dropdown-item" href=".php">Stones</a></li>
    <li><a className="dropdown-item" href=".php">Pastel</a></li>
    <li><a className="dropdown-item" href=".php">Over the Moon</a></li>
    <li><a className="dropdown-item" href=".php">Lovely Summer</a></li>
    <li><a className="dropdown-item" href=".php">Wild Ones</a></li>
    <li><a className="dropdown-item" href=".php">Postcards</a></li>
    <li><a className="dropdown-item" href=".php">Stylish Simplicity</a></li>
    <li><a className="dropdown-item" href=".php">Smiley's</a></li>
  </ul>
</li>


        </ul>
      </div>
    </div>
  </div>
</nav>


</div>

);
}

export default Navbar;