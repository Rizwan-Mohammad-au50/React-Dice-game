
import styled from "styled-components";

const RollingDice = ({currentDice,rollDice}) => {



    // // random number generation function from glg:
    // const generateRandomNum = (min,max) => {
    //    return Math.floor(Math.random() * (max-min) + min)
    // }

    // const rollDice = () => {
    //     const randomNumber = generateRandomNum(1,7);
    //     setCurrentDice((prev) => randomNumber);
    // }

  return (
    <RollingDiceContainer>
        <div className="rollDiceDiv">
            <img src={`/public/images/dice_${currentDice}.png`} alt="Dice001" onClick={rollDice}/>
        </div>
        <p>Click on Dice to roll</p>
    </RollingDiceContainer>
  )
}

const RollingDiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 48px;

    img{
        cursor: pointer;
    }

`

export default RollingDice