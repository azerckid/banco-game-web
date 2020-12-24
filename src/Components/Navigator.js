import React from "react";
import styled from "styled-components";
import Burger from "./Buger";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  background-color: rgb(35, 49, 64);
  color: #e8f4ff;
  z-index: 10;
  /* box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8); */
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const Logo = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 10px;
  margin-top: 1px;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  z-index: 100;
  /* background-color: whitesmoke; */
`;
const TextBox = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 0px;
  margin-left: 15px;
  font-size: 16px;
`;
const Navigator = () => {
  return (
    <Header>
      <LogoContainer>
        <Logo></Logo>
        <TextBox>BANCO GAMES</TextBox>
      </LogoContainer>
      <Burger></Burger>
      {/* <RightMenu></RightMenu> */}
    </Header>
  );
};

export default Navigator;
