/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={{background: `linear-gradient(#ffbd9a, #a99aff 50%, #69b2d2 100%)`,}}>

        <div
          style={{
            background: `linear-gradient(#ffbd9a, #a99aff 50%, #69b2d2 100%)`,
            color: `white`,
            height: '100%',
            margin: `0 auto`,
            maxWidth: 960,
          }}
        >
          <main>{children}</main>
          <footer style={{borderTop: 'white 1px solid'}}>
            © balancever 2020
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
