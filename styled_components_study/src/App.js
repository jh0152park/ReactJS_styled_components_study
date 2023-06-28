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

const Input = styled.input.attrs({
  required: true,
  minLength: 10,
})`
  background-color: teal;
`;

function App() {
  return (
    <Father>
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <Input></Input>
    </Father>
  );
}

export default App;
