import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Members from '../components/Members'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import icono_play from '../img/icono_play.svg'
import Navbar from '../components/Navbar'

export const TeamPageTemplate = ({
  title,
  group,
  contentComponent
}) => {
  const [modal, setModal] = useState(false);
  const PageContent = contentComponent || Content
  return (
    <div>
      <Navbar />
      <section className="section section--gradient">
        <div className="container is-max-widescreen">
            <h1 className="is-sr-only"> {title}</h1>
            {group.map((group_members) => (
              <div className="columns">
                <div className="column is-one-third">
                  <h2 className="title is-size-2 is-size-3-mobile is-spaced is-uppercase fading mt-6 ">
                    {group_members.name}
                  </h2>
                  <p>
                    {group_members.description}
                  </p>

                    <button onClick={() => setModal(!modal)} class="button is-info mt-4"> <img src={icono_play} className="pr-2" alt="Play" />  Ver video del equipo</button>
                    { modal &&
                      <div className="modal is-flex">
                        <div className="modal-background"></div>
                        <div className="modal-content">
                          <div class="video-responsive">
                            <iframe src="https://www.youtube.com/embed/3c63GiQhy8g" frameborder="0" allowfullscreen></iframe>
                          </div>
                        </div>
                        <button onClick={() => setModal(!modal)} className="modal-close is-large" aria-label="close"></button>
                      </div>
                    }

                </div>
                <div className="column">
                  <Members gridMembers={group_members.members} />
                </div>

              </div>
            ))}

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
      <TeamPageTemplate
        title={frontmatter.title}
        group={frontmatter.group}
      />
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
