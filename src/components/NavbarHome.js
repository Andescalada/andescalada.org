import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import logo from '../img/logo_andescalada_letras_blanco.svg'

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
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Fundación Andescalada" style={{ height: '20px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger has-text-white burger ${this.state.navBarActiveClass}`}
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
              <Link className="navbar-item has-text-white has-text-black-mobile-desktop" to="/">
                Inicio
              </Link>
              <Link className="navbar-item has-text-white has-text-black-mobile-desktop" to="/about">
                Conoce más
              </Link>
              <Link className="navbar-item has-text-white has-text-black-mobile-desktop" to="/team">
                Equipo
              </Link>

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
    )
  }
}

export default Navbar
