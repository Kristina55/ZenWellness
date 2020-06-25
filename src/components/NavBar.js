import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// css
import '../css/NavBar.css'
// logo
import Logo from '../images/Logo v1.png'

const ACTIVE_STYLE = {
  color: '#0f363db0',
}
class NavBar extends Component {
  render() {
    const { blueNav } = this.props
    return (
      <nav
        className="navbar navbar-default bg-light"
        style={{ backgroundColor: blueNav }}
      >
        <div className="container navbar-section">
          <div className="navbar-header">
            <NavLink className="navbar-brand" to="/">
              <img className="logo" src={Logo} alt="logo" />
            </NavLink>
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink to="/weight-loss" activeStyle={ACTIVE_STYLE}>
                  Weight Loss
                </NavLink>
              </li>
              <li>
                <NavLink to="/women-health" activeStyle={ACTIVE_STYLE}>
                  Women's Health
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" activeStyle={ACTIVE_STYLE}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeStyle={ACTIVE_STYLE}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
