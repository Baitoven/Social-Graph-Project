import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default function NotFoundPage() {
  return (
    <Layout>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
