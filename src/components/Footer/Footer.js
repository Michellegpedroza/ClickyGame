import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'


const Footer = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3">
            Footer
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Footer