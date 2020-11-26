import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

interface IProps {}

type TProps = IProps

export default function Header(props: TProps) {
  //const {  } = props

  return (
    <CustomHeader>
      <MainContainer>
        <LinkContainer>
          <CustomLink to="/">
            Home
          </CustomLink>
        </LinkContainer>
        <LinkContainer>
          <CustomLink to="/page1">
            Page1
          </CustomLink>
        </LinkContainer>
        <LinkContainer>
          <CustomLink to="/page2">
            Page2
          </CustomLink>
        </LinkContainer>
      </MainContainer>
    </CustomHeader>
  )
}

const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 900px;
  padding: 1.45rem 1.0875rem;
`

const CustomHeader = styled.header`
  margin-bottom: 1.45rem;
  background-color: #1a1a5a;
`

const CustomLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const LinkContainer = styled.h1`
  margin: 0 20px 0 0;
`
