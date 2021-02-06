import React from 'react'
import { Link } from 'gatsby'

const Crowdfunding = class extends React.Component {
  render() {
    return (
      <article className="message is-primary mb-0 has-text-centered ">
        <div className="message-body">
          <span className="pr-4">Te invitamos a apoyar <strong>Andescalada</strong>, con una de las recompensas de nuestros partners.</span>
          <a
            className="is-primary is-small pl-2"
            href="https://www.catapulta.me/campaigns/andescalada-unir-cuidar-y-documentar"
            target="_blank"
            rel="noopener noreferrer"
          >
          Apoyanos acá 💜
          </a>
        </div>
      </article>
    )
  }
}

export default Crowdfunding
