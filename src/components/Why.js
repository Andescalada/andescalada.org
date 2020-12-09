import React from 'react'
import icono_cuidado from '../img/icono_cuidado.svg'
import icono_acceso from '../img/icono_acceso.svg'
import icono_desarrollo from '../img/icono_desarrollo.svg'
import icono_documentacion from '../img/icono_documentacion.svg'

const Why = class extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight-with-navbar is-light">
        <div className="hero-body">
          <div className="container is-max-widescreen has-text-centered">
            <h2 className="title is-size-2 is-size-3-mobile is-spaced is-uppercase fading">
              ¿Por qué Andescalada?
            </h2>
            <p className="title is-size-4 pl-6 pr-6">
              Soñamos con comunidades que velen por el <br />cuidado, acceso, desarrollo y documentación <br />de los sectores de escalada
            </p>
            <div className="columns is-hidden-mobile p-6">
              <div className="column">
                <img className="is-square" src={icono_cuidado} alt="Cuidado" />
                <h3 className="title is-size-5">Cuidado</h3>
                <p>La protección del medio ambiente es clave para preservar los espacios de escalada y potenciar nuevo lugares.</p>
              </div>
              <div className="column">
                <img className="is-square" src={icono_acceso} alt="Acceso" />
                <h3 className="title is-size-5">Acceso</h3>
                <p>Aspiramos que todos puedan aprovechar de forma respetuosa la naturaleza, en particular los sectores de escalada.</p>
              </div>
              <div className="column">
                <img className="is-square" src={icono_desarrollo} alt="Desarrollo" />
                <h3 className="title is-size-5">Desarrolo</h3>
                <p>Al potenciar los sectores de escalada, se potencia todo un ecosistema en torno a ellos que permite desarrollar comunidades locales.</p>
              </div>
              <div className="column">
                <img className="is-square" src={icono_documentacion} alt="Documentación" />
                <h3 className="title is-size-5">Documentación</h3>
                <p>Con información actualizada y centralizada existirán menos problemas en los acuerdos y mayor seguridad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Why
