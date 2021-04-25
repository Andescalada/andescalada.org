import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const alphaPage = () => {
  return (
    <div>
      <Navbar />
      <section className="section section--gradient">
        <div className="container is-max-widescreen">
          <div className="columns">
            <div className="column is-two-third">
              <h1 className="title is-size-2 is-size-3-mobile is-spaced is-uppercase mt-6 pt-6">
                <span className="fading">Programa de alpha testers</span>
              </h1>
              <h2 className="title is-size-3">
                ¡Con mucha emoción comenzamos nuestro plan de testeo!
              </h2>
              <p>
                El objetivo de esta programa es encontrar errores y mejorarlos
                lo más rápido posible para poder publicar la versión final en las
                tiendas de aplicaciones.
              </p>
              <h4 className=" subtitle is-size-4 mt-4">
                😏 Cómo ser alpha tester
              </h4>
              <p>
                Esta versión es exclusiva para las personas que nos{" "}
                <strong>apoyaron en el crowdfunding.</strong> Si estas
                interesado en probar la app puedes inscribirte en la lista de
                espera aquí:
              </p>
              <div class="columns">
                <div className="column is-half">
                  <form name="alpha" method="POST" data-netlify="true">
                    <div className="field">
                      <label className="label">Nombre</label>
                      <div className="control">
                        <input className="input" name="name" type="text" placeholder="Tu nombre acá"/>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Email</label>
                      <div className="control">
                        <input className="input" name="email" type="email" placeholder="Tu email acá"/>
                      </div>
                    </div>
                    <p>
                      <button className="button is-primary" type="submit">Enviar</button>
                    </p>
                  </form>
                </div>
              </div>
              <h4 className=" subtitle is-size-4 mt-4">
                ✅ ¿Qué debes esperar de esta versión?
              </h4>
              <ul>
                <li>Una aplicación amigable y fácil de usar</li>
                <li>Todos los botones y pantallas funcionen bien</li>
                <li>
                  Todas las funcionalidades sean predecibles y hagan lo que
                  esperas
                </li>
              </ul>
              <h4 className=" subtitle is-size-4 mt-4">
                ❌ ¿Qué NO debes esperar de esta versión?
              </h4>
              <ul>
                <li>Muchas rutas documentadas</li>
                <li>Mucha información sobre las zonas, sectores y paredes</li>
                <li>
                  La capacidad de agregar zonas,sectores, paredes y rutas nuevas
                </li>
                <li>
                  Filtrar rutas, sectores o zonas por las distintas características que verás
                </li>
              </ul>
              <span />
              <p>
                Estamos trabajando en documentar gran parte de Chile, siempre
                conscientes de las comunidades locales.
              </p>
              <h4 className=" subtitle is-size-4 mt-4">
                📲 ¿Cómo instalar la app?
              </h4>
              <p>
                Dado que es una versión alpha, no es posible descargarla
                directamente de las tiendas de aplicaciones. Es por esto que
                usaremos una plataforma llamada Expo.
              </p>
              <p>
                Muchos de los errores que sucedan en la app serán reportados
                automáticamente a nosotros, tu misión es jugar con la app y
                usarla simplemente.
              </p>
              <h4 className=" subtitle is-size-4 mt-4"> ✍️ Instrucciones</h4>
              <ol>
                <li>
                  Crea una cuenta por medio del correo que recibiste de parte de
                  Expo
                </li>
                <li>Descarga Expo Go en <a href="https://apps.apple.com/app/apple-store/id982107779" target="_blank" rel="noopener noreferrer">iOS</a> o Expo en <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www" target="_blank" rel="noopener noreferrer">Android</a></li>
                <li>Abre Expo Go/Expo e inicia sesión</li>
                <li>
                  En el inicio de esta app aparecerá el logo de la aplicación de
                  Andescalada, hazle click y se abrirá nuestra app 🎉
                </li>
                <li>Inicia sesión utilizando tu número de teléfono</li>
                <li>
                  En esta etapa de la app, el código vendrá ingresado
                  automáticamente por lo que no deberás esperarlo.
                </li>
                <li>
                  <span className="is-bold">¡Comienza a usar la app!</span>
                </li>
              </ol>
            </div>
          </div>
          <h4 className=" subtitle is-size-4 mt-4">
            😱 ¿Y si no funciona algo?
          </h4>
          <p>
            Todos los errores y comentarios que tengas por favor compártelos con
            nosotros al mail{" "}
            <a href="mailto:contacto@andescalada.org?Subject=Andescalada">
              contacto@andescalada.org
            </a>{" "}
            con el asunto "Alpha tester" para que podamos atenderlo.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default alphaPage
