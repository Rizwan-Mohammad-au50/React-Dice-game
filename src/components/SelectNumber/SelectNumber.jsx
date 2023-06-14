
import styled from "styled-components";

const SelectNumber = ({selectedNumber,setSelectedNumber,error,setError}) => {
  const selectNumArr = [1, 2, 3, 4, 5, 6];

  const numSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  }
  //   console.log(selectedNumber);
  return (
    <NumberSelectorContainer>
        <p className="errorMesg">{error}</p>
      <div className="boxes">
        {selectNumArr.map((value, i) => (
          <Box
            key={i}
            onClick={() => numSelectorHandler(value)}
            isSelected={value === selectedNumber}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select A Number</p>
    </NumberSelectorContainer>
  );
};

const NumberSelectorContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
.boxes{
    display: flex;
    gap: 24px;
    cursor: pointer;
    padding-bottom: 12px;
}
p{
    font-size: 24px;
    font-weight: 600;
}
.errorMesg{
    color: red;
    font-size: 16px;
    padding: 10px;
}
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 600;

  /* injecting props */
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  &:hover{
        color: white;
        background-color: black;
        border: 1px solid black;
        transition: 0.1s ease-in-out;
    }
`;

export default SelectNumber;
