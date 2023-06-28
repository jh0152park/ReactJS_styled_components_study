import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Text = styled.span`
  color: white;
`;

const Button = styled.button`
  color: white;
  background-color: tomato;
  border-radius: 50px;
  border: 0;
`;

function App() {
  return (
    <Father>
      <Button as="a" href="#">
        Login
      </Button>
    </Father>
  );
}

export default App;
