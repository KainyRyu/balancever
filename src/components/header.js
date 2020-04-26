import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#F6F8F9`,
    }}
  >
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `10px`,
      }}
    >
      <Link
        to="/"
        style={{
          textAlign: `center`,
          textDecoration: `none`,
        }}
      >
        <img 
          className="balancever_logo" 
          src={logo} alt="logo" 
          style={{
            height: `30px`,
            margin: 0,
            padding: `0 auto`
          }}
          />
      </Link>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
