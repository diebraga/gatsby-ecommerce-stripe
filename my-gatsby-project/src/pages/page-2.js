import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Buy it</h1>
    <button>Buy</button>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
