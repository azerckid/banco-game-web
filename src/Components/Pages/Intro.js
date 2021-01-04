import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.div`
  font-size: 10vw;
  color: white;
`;

const Intro = () => {
  return (
    <Container>
      <Title>BANCOGAMES</Title>
    </Container>
  );
};

export default Intro;
