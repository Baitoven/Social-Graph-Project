// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

type TProps = {}

export default function Page1(props: TProps) {
  return (
    <Layout>
      <h1>Section page template</h1>
      <p>put some text here</p>
      <p>here is a test of </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
