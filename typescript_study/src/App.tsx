import { useState } from "react";
import styled from "styled-components";

function App() {
  const Container = styled.div`
    background-color: ${(prop) => prop.theme.backgroundColor};
    width: 100vw;
    height: 100vh;
  `;
  const H1 = styled.h1`
    color: ${(prop) => prop.theme.textColor};
  `;

  return (
    <div>
      <Container>
        <H1>Hello</H1>
      </Container>
    </div>
  );
}

export default App;
