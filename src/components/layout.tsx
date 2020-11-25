import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import { PropTypes } from "@material-ui/core"

interface IProps {
  children: any
}

type TProps = IProps

export default function Layout(props: TProps) {
  const { children } = props
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <MainContainer>
        <main>{children}</main>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 0 1.0875rem 1.45rem;
`
