import { useState, useEffect } from "react";
import sadFat from "../../../assets/img/sad_fat.webp";
import neutralFat from "../../../assets/img/neutral_fat.webp";
import happyFat from "../../../assets/img/happy_fat.webp";

export default function useResult({ bmi }) {
  const [result, setResult] = useState("결과");
  const [img, setImg] = useState({
    src: "",
    alt: "",
  });

  // BMI에 따라 결과를 반환하는 함수
  const calculateResult = (bmi) => {
    console.log("calculateResult 함수 렌더");
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
    console.log("updateResult 함수 렌더");
    switch (result) {
      case "저체중":
        return { src: sadFat, alt: "sad_fat" };
      case "정상":
        return {
          src: neutralFat,
          alt: "neutral_fat",
        };
      default:
        return { src: happyFat, alt: "happy_fat" };
    }
  };

  // bmi값이 바뀔 때마다 result값 바꾸기
  useEffect(() => {
    console.log("bmi값이 변경되었습니다!");
    const newResult = calculateResult(bmi);
    setResult(newResult);
    const newImage = updateResult(newResult);
    setImg(newImage);
  }, [bmi]);

  return [result, img];
}
