import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

interface IProps {
  siteTitle: string,
}

type TProps = IProps

export default function Header(props: TProps) {
  const { siteTitle } = props

  return (
    <CustomHeader>
      <MainContainer>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </MainContainer>
    </CustomHeader>
  )
}

const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1080px;
  padding: 1.45rem 1.0875rem;
`

const CustomHeader = styled.header`
  margin-bottom: 1.45rem;
  background-color: rebeccapurple;
`
