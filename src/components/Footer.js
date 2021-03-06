import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo_blanco.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import linkedin from '../img/social/linkedin.svg'
import medium from '../img/social/medium.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-primary has-text-white-ter">
        <div className="content has-background-primary has-text-white-ter">
          <div className="container has-background-primary has-text-white-ter">
            <div className="columns mr-0">
              <div className="column is-4 has-text-centered">
                <section>
                  <div className="content has-text-centered">
                    <img
                      src={logo}
                      alt="Kaldi"
                      style={{ width: '14em', height: '10em' }}
                    />
                  </div>
                </section>
              </div>
              <div className="column is-4">
                <section className="menu content has-text-centered">
                  <Link className="has-text-white" to="/">
                    Inicio
                  </Link><br></br>
                <Link className="has-text-white" to="/about">
                    Conoce más
                  </Link><br></br>
                <Link className="has-text-white" to="/team">
                    Equipo
                  </Link><br></br>
                <Link className="has-text-white" to="/transparency">
                    Transparencia
                  </Link><br></br>
                <Link className="has-text-white" to="/brand">
                    Guía de marca
                  </Link><br></br>
                </section>
              </div>
              <div className="column is-4 social has-text-white has-text-center-mobile content has-text-centered">
                <p> Síguenos en nuestras redes sociales</p>
                <a title="facebook" href="https://facebook.com/andescalada">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="linkedin" href="https://www.linkedin.com/company/andescalada/">
                  <img
                    className="fas fa-lg"
                    src={linkedin}
                    alt="Linkedin"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com/andescalada">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="medium" href="https://medium.com/andescalada">
                  <img
                    src={medium}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <p className="has-spaced"> </p>
                <p> Escríbenos a <br></br><a href="mailto:contacto@andescalada.org?Subject=Andescalada">contacto@andescalada.org </a></p>
              </div>
            </div>
          </div>
        </div>
        <hr className="ml-6 mr-6"/>
        <div className="container has-background-primary has-text-white-ter has-text-centered pb-4">
          <div> Este sitio web está desarrollado bajo la licencia <a href="https://choosealicense.com/licenses/gpl-3.0/" title="Licence GNU v3">GNU General Public License v3.0</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
