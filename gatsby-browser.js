import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

// eslint-disable-next-line react/prop-types
export function wrapRootElement({ element }) {

  return (
    <>
      <CssBaseline />
      {element}
    </>
  )
}