import React from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import icono_play from '../img/icono_play.svg'
import Navbar from '../components/Navbar'

export const TransparencyPageTemplate = ({
  title,
  fund,
  contentComponent
}) => {
  const PageContent = contentComponent || Content
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
                A continuación se detallan los ingresos y egresos de Andescalada. Si tienes dudas o quieres hacer un aporte, puedes escribirnos a contacto@andescalada.org.
              </p>
            </div>
            <div className="column">

            </div>
        </div>

          {fund.map((element) => (

            <div>
              <h2 className="title is-size-3 is-size-3-mobile is-spaced is-uppercase mt-6 ">
                Rendición Año {element.year}
              </h2>
              <div className="columns">
                <div className="column">
                  <h3 className="title is-size-4 is-size-3-mobile is-spaced">
                    Ingresos
                  </h3>
                  <div className="table-container">
                    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                      <thead>
                        <tr>
                          <th> ítem </th>
                          <th> Monto </th>
                          <th> Detalle </th>
                        </tr>
                      </thead>
                      <tbody>
                        {element.incomes.map((income) => (
                          <tr>
                            <td> {income.title } </td>
                            <td> {income.amount } </td>
                            <td> {income.comments } </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="column">
                  <h3 className="title is-size-4 is-size-3-mobile is-spaced">
                    Egresos
                  </h3>
                  <div className="table-container">
                    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                      <thead>
                        <tr>
                          <th> ítem </th>
                          <th> Monto </th>
                          <th> Detalle </th>
                        </tr>
                      </thead>
                      <tbody>
                        {element.expenses.map((expense) => (
                          <tr>
                            <td> {expense.title } </td>
                            <td> {expense.amount } </td>
                            <td> {expense.comments } </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <h3 className="title is-size-4 is-size-3-mobile is-spaced">
                ¡Gracias a quiénes han aportado!
              </h3>
              <p>
                {element.thanks.map((th) => (
                  <span> {th.name } · </span>
                ))}
              </p>

            </div>

          ))}

        </div>
      </section>


    </div>
  )
}

TransparencyPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  fund: PropTypes.array
}

const TransparencyPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TransparencyPageTemplate
        title={frontmatter.title}
        fund={frontmatter.fund}
      />
    </Layout>
  )
}

TransparencyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TransparencyPage

export const transparencyPageQuery = graphql`
  query TransparencyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        fund {
          year
          incomes {
            title
            amount
            comments
          }
          expenses {
            title
            amount
            comments
          }
          thanks {
            name
          }
        }
      }
    }
  }
`
