import styled from "styled-components";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import SelectNumber from "../SelectNumber/SelectNumber";
import RollingDice from "../RollingDice/RollingDice";
import { useState } from "react";
import GameRules from "../GameRules/GameRules";

const GameStarted = () => {
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);

    const [score,setScore] = useState(0);

    const [error, setError] = useState("");

    const [showGameRules,setShowGameRules] = useState(false)

    // random number generation function from glg:
    const generateRandomNum = (min,max) => {
        return Math.floor(Math.random() * (max-min) + min)
     }
 
     const rollDice = () => {
        if(!selectedNumber){
            setError("Please select any One Guessing Number");  
            return;
        }

         const randomNumber = generateRandomNum(1,7);
         setCurrentDice((prev) => randomNumber);

         //  Score condition:
        

        if(selectedNumber === randomNumber){
            setScore((previous_value) => previous_value + randomNumber);
        }
        else{
            setScore((previous_value) => previous_value - 1);
        }
        setSelectedNumber(undefined)
     }

     const resetScore = () => {
        setScore(0);
        setSelectedNumber(undefined);
        setError("");
        setShowGameRules(false);
     }

  return (
    <MainContainer>
      <main>
        <ScoreBoard score={score} />
        <SelectNumber error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </main>
      <RollingDice currentDice={currentDice} rollDice={rollDice} />
      <div className="buttons">
        <div className="reset">
            <button onClick={resetScore}>Reset</button>
        </div>
        <div className="rulesBtn">
            {/* <button onClick={() => setShowGameRules(true)}>Show Rules</button> */}
            <button onClick={(prev) => setShowGameRules((prev) => !prev)}> {showGameRules ?  "Close" : "Show Rules"} </button>
        </div>
      </div>
      {showGameRules && <GameRules setShowGameRules={setShowGameRules} />} 
    </MainContainer>
  );
};

const MainContainer = styled.div`
  /* max-width: 1280px;
  margin: 5px auto; */
  padding-top: 70px;

  align-items: end;
  main {
    display: flex;
    align-items: end;
    justify-content: space-around;
  }
  .buttons{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    gap: 10px;

    .reset button{
        border: 1px solid black;
        border-radius: 5px;
        cursor: pointer;
        display: grid;
        place-items: center;
        background-color: white;
        color: black;
        width: 220px;
        padding: 10px;
        font-size: 16px;
        font-weight: 500;

        &:hover{
        color: white;
        background-color: black;
        border: 1px solid black;
        transition: 0.1s ease-in-out;
    }
    }
    .rulesBtn button{
        border: 1px solid black;
        border-radius: 5px;
        cursor: pointer;
        display: grid;
        place-items: center;
        background-color: black;
        color: white;
        width: 220px;
        padding: 10px;
        font-size: 16px;
        font-weight: 500;

        &:hover{
        color: black;
        background-color: white;
        border: 1px solid black;
        transition: 0.1s ease-in-out;
    }
    }
  }
`;
export default GameStarted;
