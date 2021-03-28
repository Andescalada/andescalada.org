import React from 'react'

const Contact = class extends React.Component {
  render() {
    return (
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container is-max-desktop has-text-centered">
            <h2 className="title is-size-2 is-size-3-mobile is-spaced is-uppercase fading">
              ¿Quieres contactarnos?
            </h2>
            <p className="subtitle is-size-5">
              Si tienes preguntas sobre Andescalada, quieres tener más información o eres parte de un colectivo que está desarrollando un sector de escalada y crees que podemos trabajar en conjunto escríbenos a
            </p>
            <button className="button is-active"><a href="mailto:contacto@andescalada.org?Subject=Andescalada">contacto@andescalada.org</a></button>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
