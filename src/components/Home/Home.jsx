import Styled from "styled-components";

const Home = ({playNow}) => {
  return (
    <Container>
      <div className="div1">
        <img src="images/dices.png" alt="Cubes" />
      </div>
      <div className="div2">
        <h1 className="gameName">Dice Game</h1>
        <Button onClick={playNow} >Play Now</Button>
      </div>
    </Container>
  )
}

const Container = Styled.div`
  max-width: 1182px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 5px;

  .gameName{
    font-size: 90px;
  }
  .div2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`
const Button = Styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width:220px;
  padding: 10px 18px;
  background: black;
  color: white;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 16px;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover{
    background: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`


export default Home