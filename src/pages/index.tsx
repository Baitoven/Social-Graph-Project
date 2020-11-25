import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import path from "path"

import Layout from "../components/layout"
import Image from "../components/image"
import { parse } from "querystring"

export default function IndexPage() {
  const { allDataJson: { edges: result1, nodes: result2} } = useStaticQuery(graphql`
    query {
      allDataJson {
        edges {
          node {
            nodes {
              name
              id
            }
          }
        }
        nodes {
          links {
            source
            target
          }
        }
      }
    }
  `)

  console.log(result1)
  

  return (
    <Layout>
      <h1>Home Page</h1>
      <p>Welcome to the site.</p>
      <p>Site organisation might be :</p>
      <ul>
        <li>Home page : presentation and overview of the graph</li>
        <li>Word clouds made out of the comments</li>
        <li>Sentiment analysis & results</li>
        <li>About us & downloads/link to notebooks/git</li>
      </ul>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}
