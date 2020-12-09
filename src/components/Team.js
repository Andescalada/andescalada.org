import React from 'react'
import { Link } from 'gatsby'

const Team = class extends React.Component {
  render() {
    return (
      <section className="hero is-medium is-primary">
        <div className="hero-body">
          <div className="container is-max-desktop has-text-centered">
            <h2 className="title is-size-2 is-size-3-mobile is-spaced is-uppercase">
              Equipo
            </h2>
            <p className="subtitle is-size-5">
              Motivados por el amor a la escalada y al potencial que tiene Chile de desarrollar sectores para la práctica de este deporte, nos reunimos para aportar en la gestión responsable de estos
            </p>
            <Link className="button is-info mt-4" to="/team">
              Conoce al equipo
            </Link>
          </div>
        </div>
      </section>
    )
  }
}

export default Team
