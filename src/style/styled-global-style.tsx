import { withPrefix } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import { Theme } from '@material-ui/core'

export interface ITheme {
  theme: Theme
}

export const StyledGlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: white;
  }
  p, a, li, span, ul, h1, h2, h3, h4, h5,  h6 {
    font-size: 15px;
    font-weight: normal;
  }
`
