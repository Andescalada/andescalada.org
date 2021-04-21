import React from "react"
import Navbar from "../components/Navbar"

const coalitionPage = () => {
  return (
    <div>
      <Navbar />
      <section className="section section--gradient">
        <div className="container is-max-widescreen">
          <div className="columns">
            <div className="column is-two-third">
              <h1 className="title is-size-2 is-size-3-mobile is-spaced is-uppercase mt-6 pt-6">
                <span className="fading">Coaliciones</span>
              </h1>
              <p>
                Motivados por el amor a la escalada y al potencial que tiene
                Chile de desarrollar sectores para la práctica de este deporte,
                nos reunimos para aportar en la gestión responsable de estos
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default coalitionPage

// export const coalitionPageQuery = graphql`
//   query CoalitionPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       frontmatter {
//         title
//       }
//     }
//   }
// `
