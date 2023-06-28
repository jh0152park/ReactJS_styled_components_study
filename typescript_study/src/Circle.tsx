import styled from "styled-components";

interface ContainerProps {
  backgroundColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.backgroundColor};
  border: 10px solid ${(props) => props.borderColor};
  border-radius: 50%;
`;

interface CircleProps {
  backgroundColor: string;
  borderColor?: string;
}

function Circle({ backgroundColor, borderColor }: CircleProps) {
  return (
    <Container
      backgroundColor={backgroundColor}
      borderColor={borderColor ?? backgroundColor}
    ></Container>
  );
}

export default Circle;
