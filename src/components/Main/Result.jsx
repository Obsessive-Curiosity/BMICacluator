import { useState, useEffect } from "react";
import styled from "styled-components";
import sadFatImg from "./img/sad_fat.png";
import neutralFatImg from "./img/neutral_fat.png";
import happyFatImg from "./img/happy_fat.png";

function Result({ bmi }) {
  const [result, setResult] = useState("결과");
  const [img, setImg] = useState({
    src: "",
    alt: "",
  });
  const [textColor, setTextColor] = useState("black");

  // BMI에 따라 결과를 반환하는 함수
  const calculateResult = (bmi) => {
    if (bmi < 18.5) {
      return "저체중";
    } else if (bmi <= 22.9) {
      return "정상";
    } else if (bmi <= 24.9) {
      return "비만전 단계";
    } else if (bmi <= 29.9) {
      return "1단계 비만";
    } else if (bmi <= 34.9) {
      return "2단계 비만";
    } else {
      return "3단계 비만";
    }
  };

  // 결과에 따라 이미지를 업데이트하는 함수
  const updateResult = (result) => {
    switch (result) {
      case "저체중":
        return [{ src: sadFatImg, alt: "sad_fat" }, "black"];
      case "정상":
        return [{ src: neutralFatImg, alt: "neutral_fat" }, "blue"];
      default:
        return [{ src: happyFatImg, alt: "happy_fat" }, "red"];
    }
  };

  // bmi값이 바뀔 때마다 result값 바꾸기
  useEffect(() => {
    const newResult = calculateResult(bmi);
    setResult(newResult);
    const [newImage, color] = updateResult(newResult);
    setImg(newImage);
    setTextColor(color);
  }, [bmi]);

  return (
    <ResultWrapper>
      <ImageWrapper>
        <img src={img.src} alt={img.alt} />
      </ImageWrapper>
      <h2>{result}</h2>
      <p>BMI 지수 : {bmi}</p>
    </ResultWrapper>
  );
}

export default Result;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    color: ${({ color }) => color};
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
  }
  margin-bottom: 30px;
`;
