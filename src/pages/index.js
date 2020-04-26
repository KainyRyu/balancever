import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <button>SIGN IN</button>
    <svg class="Path_73" viewBox="0 0 216 50">
      <path
        fill="rgba(255,255,255,1)"
        onclick="application.goToTargetView(event)"
        id="Path_73"
        d="M 25 0 L 191 0 C 204.8071136474609 0 216 11.19288063049316 216 25 C 216 38.80712127685547 204.8071136474609 50 191 50 L 25 50 C 11.19288063049316 50 0 38.80712127685547 0 25 C 0 11.19288063049316 11.19288063049316 0 25 0 Z"
      ></path>
    </svg>
    <button>SIGN UP</button>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
