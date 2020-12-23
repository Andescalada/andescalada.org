import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import app from '../img/proyectos_activos_app.jpg'
import documentacion from '../img/proyectos_activos_documentacion.jpg'
import las_melosas from '../img/proyectos_activos_las_melosas.jpg'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Why from '../components/Why'
import Challenges from '../components/Challenges'
import Contact from '../components/Contact'
import Team from '../components/Team'

export const IndexPageTemplate = ({
  title,
  lastactivities,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <Hero />
    <Why />
    <Challenges />

    <section className="hero is-fullheight-with-navbar is-light">
      <div className="hero-body">
        <div className="container is-max-widescreen">
          <h2 className="title is-size-2 is-size-3-mobile is-spaced is-uppercase has-text-centered">
            <span className="fading">Proyectos activos</span>
          </h2>
          <div className="columns p-6">
            <div className="column">
              <img className="is-square" src={app} alt="Acceso" style={{ height: '300px' }}/>
              <h3 className="title is-size-4 pt-3">Desarrollo de aplicación móvil</h3>
              <p>Estamos desarrollando una aplicación para teléfonos iPhone y Android con el fin de gestionar los topos de manera dinámica, más eficiente, más amigable, que funciona sin internet, pero también que ayuden a mantener una gestión sustentable de los sectores.</p>
            </div>
            <div className="column">
              <img className="is-square" src={documentacion} alt="Cuidado" style={{ height: '300px' }}/>
              <h3 className="title is-size-4 pt-3">Trabajo en Las Melosas</h3>
              <p>Estamos desarrollando una aplicación para teléfonos iPhone y Android con el fin de gestionar los topos de manera dinámica, más eficiente, más amigable, que funciona sin internet, pero también que ayuden a mantener una gestión sustentable de los sectores.</p>
            </div>
            <div className="column">
              <img className="is-square" src={las_melosas} alt="Documentación" style={{ height: '300px' }}/>
              <h3 className="title is-size-4 pt-3">Documentación activa de sectores</h3>
              <p>La fundación tendrá un fuerte trabajo en terreno para documentar las zonas de escalada en donde estamos fotografiando paredes y diseñando los topos, levantando información de la zona (acceso, normas, ética, tarifas) y reuniendonos con escaladores y organizaciones locales para coordinarnos y levantar información histórica del sector y trabajar en la memoria colectiva.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Team />
    <Contact />

  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  lastactivities: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        lastactivities={frontmatter.lastactivities}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        lastactivities {
          title
          activities {
            title
            summary
          }
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
