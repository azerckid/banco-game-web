import React from "react";
import styled from "styled-components";
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
  background-color: brown;
`;

const SvgTitle = styled.div`
  width: 70vw;
  padding: 100px;
  background-color: brown;
`;

const StyledLogo = styled(ReactLogo)`
  height: 25rem;
  width: 25rem;
  display: block;
  margin: auto;
`;

const Section1 = styled.div`
  width: 80%;
  height: 900px;
  background-color: salmon;

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

const HomePresenter = () => {
  return (
    <Container>
      <SvgTitleContainer>
        <SvgTitle>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 92.25 92.25"
          >
            <polygon points="33.04 59.14 59.22 59.14 59.22 51.19 36.17 51.19 36.17 41.07 59.22 41.07 59.22 33.12 33.04 33.12 33.04 59.14" />
            <path
              d="M297.67,340.46a46.13,46.13,0,1,0,46.12,46.13A46.13,46.13,0,0,0,297.67,340.46ZM321,401.76a2.72,2.72,0,0,1-.65,1.45l-6.18,6a1.61,1.61,0,0,1-1.36.65H274.3V363.3h38.55a1.6,1.6,0,0,1,1.36.64l6.18,6a2.72,2.72,0,0,1,.65,1.45Z"
              transform="translate(-251.54 -340.46)"
            />
          </svg>
        </SvgTitle>
      </SvgTitleContainer>

      <Section1>
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
