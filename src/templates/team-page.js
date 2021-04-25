import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Members from "../components/Members"
import Layout from "../components/Layout"
import icono_play from "../img/icono_play.svg"
import Navbar from "../components/Navbar"

export const TeamPageTemplate = ({ title, group, contentComponent }) => {
  const [modal, setModal] = useState(false)
  return (
    <div>
      <Navbar />
      <section className="section section--gradient">
        <div className="container is-max-widescreen">
          <div className="columns">
            <div className="column is-two-third">
              <h1 className="title is-size-2 is-size-3-mobile is-spaced is-uppercase mt-6 pt-6">
                <span className="fading">{title}</span>
              </h1>
              <p>
                Motivados por el amor a la escalada y al potencial que tiene
                Chile de desarrollar sectores para la práctica de este deporte,
                nos reunimos para aportar en la gestión responsable de estos
              </p>
              <button
                onClick={() => setModal(!modal)}
                class="button is-info mt-4"
              >
                {" "}
                <img src={icono_play} className="pr-2" alt="Play" /> Ver video
                del equipo
              </button>
              {modal && (
                <div className="modal is-flex">
                  <div className="modal-background"></div>
                  <div className="modal-content">
                    <div class="video-responsive">
                      <iframe
                        src="https://www.youtube.com/embed/3c63GiQhy8g"
                        frameborder="0"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <button
                    onClick={() => setModal(!modal)}
                    className="modal-close is-large"
                    aria-label="close"
                  ></button>
                </div>
              )}
            </div>
            <div className="column"></div>
          </div>

          {group.map((group_members) => (
            <div className="columns">
              <div className="column is-one-third">
                <h2 className="title is-size-3 is-size-3-mobile is-spaced  mt-6 ">
                  {group_members.name}
                </h2>
                <p>{group_members.description}</p>
              </div>
              <div className="column">
                <Members gridMembers={group_members.members} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section class="hero is-dark is-large">
        <div class="hero-body">
          <div class="container has-text-centered pr-6 pl-6">
            <h1 class="title is-size-2 is-size-3-mobile">¡Muchas gracias!</h1>
            <h2 class="subtitle">
              Además del equipo hay muchas personas que han creído y trabajado
              por Andescalada. <br></br>En este espacio queremos agradecerles.
            </h2>
            <p className="pr-6 pl-6">
              <span className="has-text-weight-bold">Fer Iglesis</span> por el
              trabajo en Las Melosas.{" "}
              <span className="has-text-weight-bold">Erica</span> por su apoyo y
              prolijidad con las traducciones.{" "}
              <span className="has-text-weight-bold">Andres Elgueta</span> por
              apoyarnos por contar historias a través del podcast.{" "}
              <span className="has-text-weight-bold">LabNave</span> por la
              paciencia que nos tuvieron y calidad en el trabajo.{" "}
              <span className="has-text-weight-bold">Pato Díaz</span> por creer
              en nosotros y apoyarnos con nuestro primer video.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

TeamPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  group: PropTypes.array,
}

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TeamPageTemplate title={frontmatter.title} group={frontmatter.group} />
    </Layout>
  )
}

TeamPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TeamPage

export const teamPageQuery = graphql`
  query TeamPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        group {
          name
          description
          video
          members {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            brief
            name
            position
          }
        }
      }
    }
  }
`
