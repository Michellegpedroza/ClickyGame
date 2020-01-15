import React, { useContext } from 'react'
import GameContext from '../../utils/GameContext'

const Game = () => {
  const { imgArr, handleClick } = useContext(GameContext)

  return (
    <>
      {imgArr.map(img => <span onClick={handleClick}>{img}</span>)}
    </>
  )
}

export default Game