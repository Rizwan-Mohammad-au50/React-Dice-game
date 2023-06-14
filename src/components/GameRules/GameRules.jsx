import styled from "styled-components";
import {AiFillCloseSquare} from "react-icons/ai"
import { useState } from "react";

const GameRules = ({setShowGameRules}) => {

    // const [showGameRules,setShowGameRules] = useState(true)

  return (
    <ShowRulesContainer>
       <div className="showrules">
        <div className="closeBtnDiv">
            <h2>How To Play :</h2>
            <p onClick={() => setShowGameRules(false)}>{<AiFillCloseSquare/>}</p>
        </div>        
            <div className="text">
                <ol start="1">
                    <li> Select any number.</li>
                    <li> Click on dice image.</li>
                    <li> After click on  dice  if selected number is equal to dice number you will get same point as dice.</li>
                    <li> If you get wrong guess then 1 point will be dedcuted.</li>
                </ol>
            </div>
       </div>
    </ShowRulesContainer>
  )
}

const ShowRulesContainer = styled.div`
    .closeBtnDiv{
        display: flex;
        align-items: center;
        justify-content: space-between;

        p{
            cursor: pointer;
            font-size: 20px;
        }
    }
    .showrules{
        /* display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; */
        background-color: wheat;
        padding: 10px;
        margin: 20px auto;
        max-width: 800px;
        border-radius: 5px;
    }

    h2{
        font-size: 24px;
        font-weight: bold;
    }
    ol {
        counter-reset: item;
        /* margin: 0 0 1.5em; */
        padding: 0;
        > li {
            counter-increment: item;
            list-style-type: none;
            margin: 0;
            padding: 0 0 0 2rem;
            text-indent: -1.2rem;
            &::before {
            content: counter(item) '.';
            display: inline-block;
            font-weight: bold;
            padding-right: .5rem;      
            text-align: right;
            width: 1.5rem;
            }
        }
    }

`

export default GameRules