// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

type TProps = {}

export default function Page2(props: TProps) {
  return (
    <Layout>
      <h1>Sentiment analysis</h1>
      <h2>Wordclouds</h2>
      <h2>Analysis</h2>
      <p>put some more text here</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
