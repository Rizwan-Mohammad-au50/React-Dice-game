import Styled from "styled-components";

const ScoreBoard = ({score}) => {
  return (
    <>
        <Container>
            <h1>{score}</h1>
            <p>Total Score</p>
        </Container>
    </>
  )
}
const Container = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 200px;
    
    h1{
        font-size: 100px;
        line-height: 100px;
    }

    p{
        font-size: 24px;
        font-weight: 500px;
    }
`
export default ScoreBoard