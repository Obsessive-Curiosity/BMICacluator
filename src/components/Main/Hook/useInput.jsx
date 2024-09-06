import { useState } from "react";

function useInput(initialState) {
  const [input, setInput] = useState(initialState);

  // 개별 필드를 업데이트하는 함수를 반환
  const handleHeightChange = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      height: parseFloat(e.target.value) / 100, // cm -> m 변환
    }));
  };

  const handleWeightChange = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      weight: parseFloat(e.target.value),
    }));
  };

  return [input, handleHeightChange, handleWeightChange];
}

export default useInput;
