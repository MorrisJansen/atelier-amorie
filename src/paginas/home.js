import React from 'react';

function Home() {
  return (
    <div>


      {/* Ik heb de alert weggehaald. Hij was niet mooi genoeg, en toen heb ik hem nog lelijker gemaakt :)
      altijd nog mogelijk om hem weer toe te voegen en mooi te maken.
      */}

      {/* alert */}


      {/* <div className="alert-container" id="alert-container">
  <div className="custom-alert" role="alert">
    <p>    gratis verzending vanaf €15
</p>
    <button type="button" className="btn-close alert-button" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</div> */}





      
      {/* hero */}
      <div className="container-fluid d-flex align-items-center justify-content-center">
        <img className="img-fluid img-1 align-content-center" src="../fotos/1.png" alt="sieraden" />
      </div>

      {/* knoppen onder grote foto (grid banner items) */}
      <section className="grid-banner-items">
        <div className="container mt-5 mb-3">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <div className="grid-banner-item d-flex align-items-center">
                <div className="grid-banner-item__text">
                  <h2>Nieuw</h2>
                </div>
                <div className="square-photo">
                  <img src="../fotos/nieuw-grid-banner-item.png" alt="Nieuw" className="img-fluid"/>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <div className="grid-banner-item d-flex align-items-center">
                <div className="grid-banner-item__text">
                  <h2>Sieraden</h2>
                </div>
                <div className="square-photo">
                  <img src="../fotos/sieraden-grid-banner-item.png" alt="Sieraden" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <div className="grid-banner-item d-flex align-items-center">
                <div className="grid-banner-item__text">
                  <h2>Accessoires</h2>
                </div>
                <div className="square-photo">
                  <img src="../fotos/accesoires-grid-banner-item.png" alt="Accessoires" className="img-fluid"/>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <div className="grid-banner-item d-flex align-items-center">
                <div className="grid-banner-item__text">
                  <h2>Cadeauwinkel</h2>
                </div>
                <div className="square-photo">
                  <img src="../fotos/Cadeauwinkel-grid-banner-item.png" alt="Cadeaubon" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <div className="grid-banner-item d-flex align-items-center">
                <div className="grid-banner-item__text">
                  <h2>Collecties</h2>
                </div>
                <div className="square-photo">
                  <img src="../fotos/Collecties-grid-banner-item.png" alt="Collecties" className="img-fluid"/>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <div className="grid-banner-item d-flex align-items-center">
                <div className="grid-banner-item__text">
                  <h2>Persoonlijk</h2>
                </div>
                <div className="square-photo">
                  <img src="../fotos/persoonlijk-grid-banner-item.png" alt="Persoonlijk" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* product preview */}
      {/* hier wil ik nog een mooi hover effect opzetten van mensen die de sieraden aanhebben als je hoverd */}
      <section className="products-preview-section">
        <div className="container-fluid">
          <div className="row">
            <div className="product-item col-12 col-sm-4 col-md-3 col-lg-2">
              <img src="../fotos/preview-product-1.webp" alt="preview-product-1" />
              <p>Ring Venice</p>
              <p>34,95€</p>
              <div className="favoriet-button-container">
                <div className="favoriet-icoon-cirkel">
                  <button className="favoriet-button"></button>
                </div>
              </div>
            </div>
            {/* Hier komen de andere product items */}
          </div>
          <div className="show-more-button-container">
            <button className="show-more-button">Show more</button>
            <button className="show-less-button">Show less</button>
          </div>
        </div>
      </section>

      {/* welkom bij Amorie */}
      <section className="hero">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-4 my-5 my-auto">
              <div className="text-center">
                <h2>Welkom bij Amorie</h2>
                <p className="my-5">shop nu een van onze mooie collecties</p>
                <a href="#" className="welkom-bij-button my-5">bekijk collecties</a>
              </div>
            </div>
            <div className="col-md-8 my-5">
              {/* zou wel de tekst in de foto moeten veranderen naar amorie */}
              <img src="../fotos/welkom-bij-lotsofjewelz.jpg" alt="welkom bij Amorie" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* carousel */}
      <section className="carousel">
        {/* Dit is de carousel */}
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Afbeeldingen */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container carousel-text-container">
                <div className="row">
                  <div className="col-md-5 order-2 my-auto">
                    <h3>Ontdek onze: Tell me your name</h3>
                    <p className="p-3">Eén letter, oneindige betekenis. Deze verfijnde sieraden zijn perfect om jezelf of een geliefde te eren. Kies een enkele letter die voor jou belangrijk is en draag hem dicht bij je hart. Eenvoudig, elegant, en vol persoonlijke betekenis.</p>
                    <a href="#" id="welkom-bij-button" className="welkom-bij-button">Bekijk collectie</a>
                  </div>
                  <div className="col-md-7 order-1">
                    <img src="../fotos/carousel-collectie-1.jpg" alt="Collectie 1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container carousel-text-container">
                <div className="row">
                  <div className="col-md-4 order-2 my-auto">
                    <h3>Ontdek onze: Year of Birth</h3>
                    <p className="p-3">Jouw leven, één jaar. 'Year of Birth' sieraden vangen je unieke verhaal in één jaartal. Draag je geboortejaar met trots als een tijdloos aandenken of geef het als betekenisvol cadeau.</p>
                    <a href="#" id="welkom-bij-button" className="welkom-bij-button">Bekijk collectie</a>
                  </div>
                  <div className="col-md-8 order-1">
                    <img src="../fotos/carousel-collectie-2.webp" alt="Collectie 2" />
                  </div>
                </div>
              </div>
            </div>
            {/* Voeg meer .carousel-item elementen toe voor extra afbeeldingen */}
          </div>
        </div>
      </section>

      {/* reviews */}
      <section className="reviews">
        <div className="container reviews-container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 position-relative scroll-item-left">
              <div className="scroll-item">
                <img src="../fotos/2.png" alt="" className="img-fluid mx-auto d-block" />
                <div className="button-container text-center">
                  <p>Hier moet een leuk textje komen van een review die iemand heeft achtergelaten</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 position-relative scroll-item-right">
              <div className="scroll-item">
                <img src="../fotos/1.png" alt="" className="img-fluid mx-auto d-block" />
                <div className="button-container text-center">
                  <p>Hier moet een leuk textje komen van een review die iemand heeft achtergelaten</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
