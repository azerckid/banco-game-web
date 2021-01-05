import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

import Intro from "../../Components/Pages/Intro";
import "./home.css";
import { ReactComponent as ReactLogo } from "../../assets/img/BancoGamesLogoCircle.svg";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SvgTitleContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: black;
  padding: 100px 0;
`;

const SvgTitle = styled.div`
  width: 70vw;
  padding: 100px;
  background-color: black;
`;

const fade = (primaryColor, secondaryColor) => keyframes`
0% {
fill:${primaryColor};
}
50% {
 fill:${secondaryColor};
}
100%{
  fill:${primaryColor};
}
`;

const StyledLogo = styled(ReactLogo)`
  height: 25rem;
  width: 25rem;
  display: block;
  margin: auto;
  .path {
    animation: ${(props) => fade(props.primaryColor, props.secondaryColor)}
      infinite 5s linear;
  }
`;

const Section1 = styled.div`
  width: 80%;
  height: 900px;
  background-color: #ebc252;

  font-size: 30px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Section2 = styled.div`
  width: 80%;
  height: 300px;
  background-color: tomato;

  font-size: 30px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Section3 = styled.div`
  width: 80%;
  height: 500px;
  background-color: dodgerblue;
  font-size: 30px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Section4 = styled.div`
  width: 80%;
  height: 500px;
  background-color: blueviolet;

  font-size: 30px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Section5 = styled.div`
  width: 80%;
  height: 500px;
  background-color: salmon;

  font-size: 30px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 2,
  });
  const onScroll = (event) => {
    setState({ y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return state;
};

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
    // eslint-disable-next-line
  }, []);
  if (typeof duration !== "number") {
    return;
  }
  return { ref: element, style: { opacity: 0 } };
  // return element;
};

const HomePresenter = () => {
  const { y } = useScroll();
  const fadeInH1 = useFadeIn(4);
  const fadeInP1 = useFadeIn(8, 4);

  return (
    <Container>
      <Intro></Intro>
      <SvgTitleContainer>
        <SvgTitle>
          <StyledLogo
            primaryColor="#ebc252"
            secondaryColor="white"
          ></StyledLogo>
        </SvgTitle>
      </SvgTitleContainer>

      <Section1
        style={{
          color: y > 1500 ? "red" : "blue",
          fontSize: y > 1500 ? 80 : 40,
        }}
      >
        <h1>Action Golf Title</h1>
        <p>액션골프 Typo와 캐릭터 이미지는 애니메이션</p>
      </Section1>

      <Section2>게임 간략 소개 앱스토어 링크 아이콘</Section2>
      <Section3>
        <h1> 스마트폰 스크린의 연결</h1>
        <h1> 폰트와 이미지 분리 애니메이션 효과 </h1>
        <h1> 하단 아이콘 애니메이션 효과 </h1>
      </Section3>
      <Section4>
        <h1> 실제 골프 학습의 문제점</h1>
        <h1> 기존 골프 게임의 문제점</h1>
        <h1> 상단이미지 하단이미지 분리 애니메이션 효과 </h1>
      </Section4>
      <Section5>
        <h1> 액션 골프를 통한 문제 해결</h1>
        <h1> 상단이미지 하단이미지 애니메이션 효과 </h1>
        <h1> 인게임 이미지 4종 슬라이드 형식으로 삽입 / pagenation </h1>
      </Section5>
    </Container>
  );
};

export default HomePresenter;
