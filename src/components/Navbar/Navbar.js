import React, { useContext } from 'react'
import GameContext from '../../utils/GameContext'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Navbar = () => {
  const { score, highScore } = useContext(GameContext)
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h3">
            Clicky Game
          </Typography>
          <p>Your Score: {score}</p>
          <p>High Score: {highScore}</p>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar