import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box1 = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const Box2 = styled.div`
  background-color: yellow;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Father style={{ display: "flex" }}>
      <Box1>
        <Text>Hello</Text>
      </Box1>
      <Box2 />
    </Father>
  );
}

export default App;
