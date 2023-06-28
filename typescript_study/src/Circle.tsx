import styled from "styled-components";

interface ContainerProps {
  backgroundColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 50%;
`;

interface CircleProps {
  backgroundColor: string;
}

function Circle({ backgroundColor }: CircleProps) {
  return <Container backgroundColor={backgroundColor}></Container>;
}

export default Circle;

interface PlayerProps {
  name: string;
  age?: number;
}

const sayHello = (player: PlayerProps) =>
  `Hello ${player.name} you are ${player.age} OLD!!`;

sayHello({ name: "Hyeon", age: 10 });
