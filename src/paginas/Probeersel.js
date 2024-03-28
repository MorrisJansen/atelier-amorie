import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'; // 1. Importeer Offcanvas vanuit react-bootstrap/Offcanvas

function Probeersel() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubSubMenu, setShowSubSubMenu] = useState(false);
  const [showSubSubSubMenu, setShowSubSubSubMenu] = useState(false);

  const handleClose = () => setShowMenu(false);
  const handleOpenSubMenu = () => setShowSubMenu(true);
  const handleCloseSubMenu = () => setShowSubMenu(false);
  const handleOpenSubSubMenu = () => setShowSubSubMenu(true);
  const handleCloseSubSubMenu = () => setShowSubSubMenu(false);
  const handleOpenSubSubSubMenu = () => setShowSubSubSubMenu(true);
  const handleCloseSubSubSubMenu = () => setShowSubSubSubMenu(false);

  return (
    <div className="offcanvas offcanvas-start d-flex" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      {/* Binnenkant hamburger */}
      <Offcanvas show={showMenu} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li>
              <button onClick={handleOpenSubMenu} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                Sieraden
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>
              <Offcanvas show={showSubMenu} onHide={handleCloseSubMenu} placement="start">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title onClick={handleCloseSubMenu} style={{ cursor: 'pointer' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                    Sieraden
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ul>
                    <li>
                      <button onClick={handleOpenSubSubMenu} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        Oorbellen
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                      </button>
                      <Offcanvas show={showSubSubMenu} onHide={handleCloseSubSubMenu} placement="start">
                        {/* Offcanvas content */}
                      </Offcanvas>
                    </li>
                    <li>
                      <button onClick={handleOpenSubSubMenu} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        Kettingen
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                      </button>
                      <Offcanvas show={showSubSubMenu} onHide={handleCloseSubSubMenu} placement="start">
                        {/* Offcanvas content */}
                      </Offcanvas>
                      {/* </Offcanvas> */}
                    </li>
                    <li>Armbanden</li>
                    <li>Enkelbandjes</li>
                  </ul>
                </Offcanvas.Body>
              </Offcanvas>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Probeersel;