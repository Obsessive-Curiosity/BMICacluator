import { useState, useEffect, useCallback } from "react";

export default function useResult({ bmi }) {
  const [result, setResult] = useState("결과");
  const [img, setImg] = useState({
    src: "",
    alt: "",
  });

  // BMI에 따라 결과를 반환하는 함수
  const calculateResult = useCallback((bmi) => {
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
  }, []);

  // 결과에 따라 이미지를 업데이트하는 함수
  const updateResult = useCallback((result) => {
    console.log("updateResult 함수 렌더");
    switch (result) {
      case "저체중":
        return { src: "/img/sad_fat.png", alt: "sad_fat" }; // 절대 경로
      case "정상":
        return { src: "/img/neutral_fat.png", alt: "neutral_fat" };
      default:
        return { src: "/img/happy_fat.png", alt: "happy_fat" };
    }
  }, []);

  // bmi값이 바뀔 때마다 result값 바꾸기
  useEffect(() => {
    console.log("bmi값이 변경되었습니다!");
    const newResult = calculateResult(bmi);
    setResult(newResult);
    const newImage = updateResult(newResult);
    setImg(newImage);
  }, [bmi, calculateResult, updateResult]);

  return [result, img];
}
