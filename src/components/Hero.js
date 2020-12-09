import React, { useState } from 'react';
import icono_play from '../img/icono_play.svg'
import logo from '../img/logo_blanco.svg'

const Hero = () => {

  const [modal, setModal] = useState(false);

  return (
    <section className="hero is-fullheight has-text-white"
      style={{
        backgroundImage: `url(/img/home_desktop.jpg)`,
        backgroundPosition: `center center`,
        backgroundAttachment: `fixed`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`
      }}
    >
      <div className="hero-body">
        <div className="container">
          <div className="columns is-desktop">
            <div className="column">
              <h1
                className="is-sr-only">
                ANDESCALADA
              </h1>
              <img src={logo} alt="Kaldi" style={{ width: '300px' }} />
              <p
                className="has-text-weight-medium is-size-5-mobile is-size-5-tablet is-size-4-widescreen pt-2">
                Promovemos el desarrollo sostenible de los sectores de escalada, a través de la creación de herramientas para crear comunidad, cuidar y documentar
              </p>
              <button onClick={() => setModal(!modal)} class="button is-info  mt-4"> <img src={icono_play} className="pr-2" alt="Play" />  Ver video de Andescalada</button>
              { modal &&
                <div className="modal is-flex">
                  <div className="modal-background"></div>
                  <div className="modal-content">
                    <div class="video-responsive">
                      <iframe src="https://www.youtube.com/embed/pzcrnifuumk" frameborder="0" allowfullscreen></iframe>
                    </div>
                  </div>
                  <button onClick={() => setModal(!modal)} className="modal-close is-large" aria-label="close"></button>
                </div>
              }

            </div>
            <div className="column">

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
