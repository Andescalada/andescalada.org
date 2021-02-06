import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook_black.svg'
import instagram from '../img/social/instagram_black.svg'
import logo from '../img/logo_svg.svg'
import Crowdfunding from '../components/Crowdfunding'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <div className="">
        <nav
          className="navbar is-light"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="Andescalada" style={{ height: '80px' }} />
              </Link>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-end has-text-centered">
                <Link className="navbar-item" to="/">
                  Inicio
                </Link>
                <Link className="navbar-item" to="/about">
                  Conoce más
                </Link>
                <Link className="navbar-item" to="/team">
                  Equipo
                </Link>
                <a
                  className="navbar-item"
                  href="https://medium.com/andescalada"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>

                <a
                  className="navbar-item"
                  href="https://facebook.com/andescalada"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <img src={facebook} alt="Facebook" style={{ height: '20px' }}/>
                  </span>
                </a>
                <a
                  className="navbar-item"
                  href="https://instagram.com/andescalada"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <img src={instagram} alt="Instagram" style={{ height: '24px' }}/>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
