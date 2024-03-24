import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';

function OffCanvasMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubSubMenu, setShowSubSubMenu] = useState(false);
  const [showSubSubSubMenu, setShowSubSubSubMenu] = useState(false);

  const handleClose = () => {
    setShowMenu(false);
    setShowSubMenu(false);
    setShowSubSubMenu(false); 
    setShowSubSubSubMenu(false);
  };

  const handleShowMenu = () => setShowMenu(true);

  const handleOpenSubMenu = () => setShowSubMenu(true);

  const handleCloseSubMenu = () => setShowSubMenu(false);

  const handleOpenSubSubMenu = () => setShowSubSubMenu(true);

  const handleCloseSubSubMenu = () => setShowSubSubMenu(false);

  const handleOpenSubSubSubMenu = () => setShowSubSubSubMenu(true);

  const handleCloseSubSubSubMenu = () => setShowSubSubSubMenu(false);

  return (
    <>
      <Button onClick={handleShowMenu}>Open Menu</Button>

      <Offcanvas show={showMenu} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li>
              <button onClick={handleOpenSubMenu} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                Sieraden
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>
              <Offcanvas show={showSubMenu} onHide={handleCloseSubMenu} placement="start">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title onClick={handleCloseSubMenu} style={{ cursor: 'pointer' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                    Sieraden
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ul>
                    <li>
                      <button onClick={handleOpenSubSubMenu} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        Oorbellen
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                      </button>
                      <Offcanvas show={showSubSubMenu} onHide={handleCloseSubSubMenu} placement="start">
                        <Offcanvas.Header closeButton>
                          <Offcanvas.Title onClick={handleCloseSubSubMenu} style={{ cursor: 'pointer' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>
                            Oorbellen
                          </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                          <ul>
                            <li>Alle Oorbellen</li>
                            <li>Hoops</li>
                            <li>Oorringen & Hangers</li>
                            <li>Oorknopjes</li>
                            <li>Doortrek Oorbellen</li>
                            <li>Ear Cuffs</li>
                            <li>Piercings</li>
                            <li>Sets</li>
                            <li>Mix & Match</li>
                          </ul>
                        </Offcanvas.Body>
                      </Offcanvas>
                    </li>
                    <li>
                      <button onClick={handleOpenSubSubSubMenu} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        Kettingen
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                      </button>
                      <Offcanvas show={showSubSubSubMenu} onHide={handleCloseSubSubSubMenu} placement="start">
                        <Offcanvas.Header closeButton>
                          <Offcanvas.Title onClick={handleCloseSubSubSubMenu} style={{ cursor: 'pointer' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>
                            Kettingen
                          </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                          <ul>
                            <li>Alle Kettingen</li>
                            <li>Meerdere Lagen</li>
                          </ul>
                        </Offcanvas.Body>
                      </Offcanvas>
                    </li>
                    <li>Ringen</li>
                    <li>Armbanden</li>
                    <li>
                      <button onClick={handleOpenSubSubSubMenu} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        Ringen
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                      </button>

                      <Offcanvas show={showSubSubSubMenu} onHide={handleCloseSubSubSubMenu} placement="start">
                        <Offcanvas.Header closeButton>
                          <Offcanvas.Title onClick={handleCloseSubSubSubMenu} style={{ cursor: 'pointer' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>
                            Ringen
                          </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                          <ul>
                            <li>Alle Ringen</li>
                            <li>Zegelringen</li>
                            <li>One Size Ringen</li>
                            <li>Vintage Look</li>
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
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasMenu;
