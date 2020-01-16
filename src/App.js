import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Game from './components/Game'
import Footer from './components/Footer'
import GameContext from './utils/GameContext'

const App = () => {

  const [gameState, setGameState] = useState({
    score: 0,
    highScore: 0,
    clickedArr: [],
    imgArr: [
      <img id="img1" height="300px" width="400" alt="click me" src={require("./images/one.jpg")} />,
      <img id="img2" height="300px" width="400" alt="click me" src={require("./images/two.jpg")} />,
      <img id="img3" height="300px" width="400" alt="click me" src={require("./images/three.jpg")} />,
      <img id="img4" height="300px" width="400" alt="click me" src={require("./images/four.jpg")} />,
      <img id="img5" height="300px" width="400" alt="click me" src={require("./images/five.jpg")} />,
      <img id="img6" height="300px" width="400"  alt="click me" src={require("./images/six.jpg")} />,
      <img id="img7" height="300px" width="400" alt="click me" src={require("./images/seven.jpg")} />,
      <img id="img8" height="300px" width="400" alt="click me" src={require("./images/eight.jpg")} />,
    ]
  })

  gameState.handleClick = event => {
    //shuffle the image array
    const shuffle = (arr) => {
      let i = arr.length
      let temp, rand
      while (0 !== i) {
        rand = Math.floor(Math.random() * i)
        i--
        temp = arr[i]
        arr[i] = arr[rand]
        arr[rand] = temp
      }
      return arr
    }
    let imgArr = shuffle(gameState.imgArr)
    setGameState({ ...gameState, imgArr })
    if (gameState.clickedArr.indexOf(event.target.id) === -1) { //Win
      let clickedArr = JSON.parse(JSON.stringify(gameState.clickedArr))
      clickedArr.push(event.target.id)
      setGameState({ ...gameState, clickedArr, score: gameState.score + 1 })
    } else {  //Lost
      alert('You lost.')
      console.log("Your Score:" + gameState.score)
      if (gameState.score > gameState.highScore) {
        setGameState({ ...gameState, score: 0, clickedArr: [], highScore: gameState.score })
      } else {
        setGameState({ ...gameState, score: 0, clickedArr: [] })
      }
    }
  }

  return (
    <GameContext.Provider value={gameState}>
      <Navbar />
      <Game />
      <Footer />
    </GameContext.Provider>
  )
}

export default App