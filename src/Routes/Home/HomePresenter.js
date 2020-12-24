import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section1 = styled.div`
  width: 80%;
  height: 900px;
  background-color: salmon;

  font-size: 30px;
`;

const Section2 = styled.div`
  width: 80%;
  height: 300px;
  background-color: tomato;

  font-size: 30px;
`;

const Section3 = styled.div`
  width: 80%;
  height: 500px;
  background-color: dodgerblue;

  font-size: 30px;
`;

const Section4 = styled.div`
  width: 80%;
  height: 500px;
  background-color: blueviolet;

  font-size: 30px;
`;

const Section5 = styled.div`
  width: 80%;
  height: 500px;
  background-color: salmon;

  font-size: 30px;
`;

const HomePresenter = () => {
  return (
    <Container>
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
