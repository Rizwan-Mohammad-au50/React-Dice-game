
import { useState } from "react"
import Home from "./components/Home/Home"
import GameStarted from "./components/GameStarted/GameStarted";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const playNow = () => {
    setGameStarted((previous)=> !previous);
  }
  return (
    <>
    { gameStarted ? <GameStarted/> : <Home playNow={playNow} /> }
    </>
  )
}

export default App