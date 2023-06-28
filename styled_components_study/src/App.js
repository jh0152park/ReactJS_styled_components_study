import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const rotateAnimation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 0px;
} 50% {
  
  border-radius: 100px;
} 100% {
  transform: rotate(360deg);
  border-radius: 0px;
}
`;

const Emoji = styled.span`
  font-size: 50px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: darkgreen;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotateAnimation} 1s linear infinite;

  ${Emoji} {
    &:hover {
      font-size: 100px;
    }
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
