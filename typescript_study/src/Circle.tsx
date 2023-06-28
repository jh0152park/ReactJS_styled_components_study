import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  backgroundColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CircleProps {
  backgroundColor: string;
  borderColor?: string;
}

function Circle({ backgroundColor, borderColor }: CircleProps) {
  const [counter, setCounter] = useState<number>(0);

  const onClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <Container
      onClick={onClick}
      backgroundColor={backgroundColor}
      borderColor={borderColor ?? backgroundColor}
    >
      {counter}
    </Container>
  );
}

export default Circle;
