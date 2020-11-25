import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

export default function IndexPage() {

  return (
    <Layout>
      <h1>Home Page</h1>
      <p>Welcome to the site.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}
