import React from 'react'

const Why = class extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight-with-navbar is-light">
        <div className="hero-body">
          <div className="container is-max-desktop has-text-centered">
            <h2 className="title is-size-2 is-spaced is-uppercase fading">
              ¿Por qué Andescalada?
            </h2>
            <h3 className="subtitle is-size-4">
              Soñamos con comunidades que velen por el cuidado, acceso, desarrollo y documentación de los sectores de escalada
            </h3>
            <div className="columns is-hidden-mobile">
              <div className="column">La protección del medio ambiente es clave para preservar los espacios de escalada y potenciar nuevo lugares.</div>
              <div className="column">Aspiramos que todos puedan aprovechar de forma respetuosa la naturaleza, en particular los sectores de escalada.</div>
              <div className="column">Al potenciar los sectores de escalada, se potencia todo un ecosistema en torno a ellos que permite desarrollar comunidades locales.</div>
              <div className="column">Con información actualizada y centralizada existirán menos problemas en los acuerdos y mayor seguridad.</div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Why
