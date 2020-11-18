import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from 'styled-components'

import getPageContext from './src/style'

// eslint-disable-next-line react/prop-types
export function wrapRootElement({ element }) {
  const { theme } = getPageContext()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  )
}