import React from 'react'
import PropTypes from 'prop-types'
import Challenges from '../components/Challenges'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Navbar from '../components/Navbar'
import acceso from '../img/problema1.jpg'
import involucramiento from '../img/problema2.jpg'
import basura from '../img/problema3.jpg'
import desactualizada from '../img/problema4.jpg'
import infraestructura from '../img/problema5.jpg'
import concentracion from '../img/problema6.jpg'
import fauna from '../img/problema7.jpg'
import comunidad from '../img/problema8.jpg'
import potencial1 from '../img/potencial1.jpg'
import potencial2 from '../img/potencial2.jpg'
import potencial3 from '../img/potencial3.jpg'
import potencial4 from '../img/potencial4.jpg'
import potencial5 from '../img/potencial 5.jpg'
import potencial6 from '../img/potencial 6.jpg'
import app from '../img/proyectos_activos_app.jpg'
import documentacion from '../img/proyectos_activos_documentacion.jpg'
import las_melosas from '../img/proyectos_activos_las_melosas.jpg'
import icono_cuidado from '../img/flaticon/planta.svg'
import icono_acceso from '../img/flaticon/ecologia.svg'
import icono_documentacion from '../img/flaticon/bosque.svg'


export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Navbar />
      <section className="section section--gradient">
        <div className="container is-max-widescreen pt-6">
          <h1 className="title is-size-1 is-size-3-mobile is-spaced is-uppercase  mt-6 pt-6">
            <span className="fading">{title}</span>
          </h1>
          <div class="columns">
            <div class="column">
              <p className="title is-size-5 secondary-font is-uppercase mb-0 andescalada-orange">Nuestra visión</p>
              <h2 className="title is-size-3 is-size-3-mobile is-spaced mt-0">
                ¿Por qué lo hacemos?
              </h2>
              <p className="pr-4">
                Soñamos con comunidades organizadas en torno a la escalada en toda América Latina, que velen por el cuidado, acceso, desarrollo y documentación de cada uno de sus sectores, cuyos principios se basen en la protección del ecosistema y la memoria colectiva, generando el máximo valor para la comunidad.
              </p>
            </div>
            <div class="column">
              <p className="title is-size-5 secondary-font is-uppercase mb-0 andescalada-purple">Nuestra misión</p>
              <h2 className="title is-size-3 is-size-3-mobile is-spaced mt-0">
                ¿Qué hacemos?
              </h2>
              <p className="pr-4">
                Proporcionar un espacio de comunicación y entregar herramientas de gestión a la comunidad escaladora, para promover el desarrollo sustentable y organizado de la escalada, cuidar el medio ambiente, potenciar el desarrollo local y ayudar a resolver problemáticas de acceso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section has-background-light">
        <div className="container is-max-widescreen ">

          <div className="columns">
            <div className="column is-two-third">
              <h2 className="title is-size-2 is-size-3-mobile is-spaced is-uppercase fading mt-6 pt-6">
                <span className="fading">El diágnostico</span>
              </h2>
              <p>
                Motivados por el amor a la escalada y al potencial que tiene Chile de desarrollar sectores para la práctica de este deporte, nos reunimos para aportar en la gestión responsable de estos
              </p>
            </div>
            <div className="column">
            </div>
        </div>

          <div class="columns">
            <div class="column">
              <img src={acceso} alt="Problemas de acceso" />
              <h3 className="title is-size-5 secondary-font">
                Problemas de acceso
              </h3>
            </div>
            <div class="column">
              <img src={involucramiento} alt="Falta de involucramiento de comunidades locales" />
              <h3 className="title is-size-5 secondary-font">
                Falta de involucramiento de comunidades locales
              </h3>
            </div>
            <div class="column">
              <img src={basura} alt="Basura en los sectores" />
              <h3 className="title is-size-5 secondary-font">
                Basura en los sectores
              </h3>
            </div>
            <div class="column">
              <img src={desactualizada} alt="Información inexistente o desactualizada" />
              <h3 className="title is-size-5 secondary-font">
                Información inexistente o desactualizada
              </h3>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <img src={infraestructura} alt="Falta de infraestructura como baños o senderos" />
              <h3 className="title is-size-5 secondary-font">
                Falta de infraestructura como baños o senderos
              </h3>
            </div>
            <div class="column">
              <img src={concentracion} alt="Falta de involucramiento de comunidades locales" />
              <h3 className="title is-size-5 secondary-font">
                Concentración de escaladores en pocos sectores
              </h3>
            </div>
            <div class="column">
              <img src={fauna} alt="Basura en los sectores" />
              <h3 className="title is-size-5 secondary-font">
                Falta de información de fauna y flora de los sectores
              </h3>
            </div>
            <div class="column">
              <img src={comunidad} alt="Información inexistente o desactualizada" />
              <h3 className="title is-size-5 secondary-font">
                Poca relación entre escaladores
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container is-max-widescreen pt-6">

          <div class="columns">
            <div class="column">

              <div class="columns">
                <div class="column">
                  <img src={potencial1} alt="Basura en los sectores" className="pb-3"/>
                  <img src={potencial2} alt="Basura en los sectores" className="pb-3"/>
                  <img src={potencial3} alt="Basura en los sectores" className="pb-3"/>
                </div>
                <div class="column">
                  <img src={potencial4} alt="Basura en los sectores" className="pb-3"/>
                  <img src={potencial5} alt="Basura en los sectores" className="pb-3"/>
                  <img src={potencial6} alt="Basura en los sectores" className="pb-3"/>
                </div>
              </div>

            </div>
            <div class="column has-text-centered p-4">
              <h2 className="title is-size-2 is-size-3-mobile is-spaced is-uppercase fading mt-6 pt-6">
                El potencial de Chile en la escalada
              </h2>
              <p className="is-size-5">
                El atractivo de lugares a lo largo de Chile - tales como la Patagonia, el Valle de Cochamó, el desierto de Atacama -  está posicionando al país como un destino mundial para practicar la escalada.
              </p>
              <br/>
              <p className="is-size-5">
                Existe una oportunidad única de fomentar el desarrollo de las comunidades locales, en donde estas pueden ofrecer productos y o servicios asociados a un ecoturismo para este deporte, habilitando zonas para acampar, servicios guiados, oferta grastrónomica, entre otras.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hero is-fullheight-with-navbar has-background-light">
        <div className="hero-body">
          <div className="container is-max-widescreen has-text-centered">
            <h2 className="title is-size-2 is-size-3-mobile is-spaced is-uppercase">
              <span className="fading">Líneas de acción</span>
            </h2>
            <p className="title is-size-4 pl-6 pr-6">
              Para hacernos cargo de los problemas y las oportunidades que vemos, <br/>trabajamos en tres líneas de acción
            </p>
            <div className="columns is-hidden-mobile p-6">

              <div className="column">
                <img className="is-square" src={icono_acceso} alt="Acceso" style={{ height: '52px' }}/>
                <h3 className="title is-size-4">Unir</h3>
                <p>Generar vínculos duraderos entre la comunidad local y la comunidad escaladora</p>
              </div>
              <div className="column">
                <img className="is-square" src={icono_cuidado} alt="Cuidado" style={{ height: '52px' }}/>
                <h3 className="title is-size-4">Cuidar</h3>
                <p>Proteger los ecosistemas y mitigar el impacto creado por la escalada</p>
              </div>
              <div className="column">
                <img className="is-square" src={icono_documentacion} alt="Documentación" style={{ height: '52px' }}/>
                <h3 className="title is-size-4">Documentar</h3>
                <p>Crear un canal para la gestión responsable de sectores de escalada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero is-fullheight-with-navbar">
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

    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
