import { SheetsRegistry } from 'jss'
import { createGenerateClassName, createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fafafa',
    },
    secondary: {
      main: '#00446f',
    },
  },
  typography: {
    fontFamily: '"Proxima Nova Regular", "Helvetica Neue", "Helvetica", Arial, sans-serif',
    useNextVariants: true,
  },
  overrides: {
    MuiTypography: {
      h1: { fontFamily: '"Proxima Nova Extrabold", "Helvetica Neue", "Helvetica", Arial, sans-serif' },
      h2: { fontFamily: '"Proxima Nova Extrabold", "Helvetica Neue", "Helvetica", Arial, sans-serif' },
      h3: { fontFamily: '"Proxima Nova Extrabold", "Helvetica Neue", "Helvetica", Arial, sans-serif' },
      h4: { fontFamily: '"Proxima Nova Extrabold", "Helvetica Neue", "Helvetica", Arial, sans-serif' },
      h5: { fontFamily: '"Proxima Nova Extrabold", "Helvetica Neue", "Helvetica", Arial, sans-serif' },
      h6: { fontFamily: '"Proxima Nova Extrabold", "Helvetica Neue", "Helvetica", Arial, sans-serif' },
    },
  },
  custom: {
    palette: {
      background: {
        light: '#f2f2f2',
        main: '#fff',
        dark: '#FAFAFA',
      },
      grey: {
        light: '#b3b3b3',
        main: '#a8a8a8',
        dark: '#3B3B3B',
      },
      blue: {
        light: '#009cb4',
      },
    },
  },
})

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  }
}

export default function getPageContext() {
  /*
   * Make sure to create a new context for every server-side request so that data
   * isn't shared between connections (which would be bad).
   */
  if (!process.browser) {
    return createPageContext()
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext()
  }

  return global.__INIT_MATERIAL_UI__
}
