import styled from "styled-components";
import { useId } from "react";
import useInput from "../Hook/useInput";
import NumberInputItem from "../inputItems/NumberInputItem";

function Input({ setBmi, setVisible }) {
  const id = useId();

  const HEIGHT = "키";
  const WEIGHT = "몸무게";

  const [input, handleHeightChange, handleWeightChange] = useInput({
    height: 0,
    weight: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const bmiValue = input.weight / input.height ** 2;
    setBmi(bmiValue.toFixed(2));
    setVisible(true);
  };

  return (
    <>
      <form action="">
        <NumberInputItem item={HEIGHT} handler={handleHeightChange} />
        <NumberInputItem item={WEIGHT} handler={handleWeightChange} />
        <SubmitBtn id={id} type="submit" onClick={handleSubmit}>
          BMI계산
        </SubmitBtn>
      </form>
    </>
  );
}

export default Input;

const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  justify-content: center;
  width: 100%;
  height: 48px;
  padding: 0 22px;
  background: #2d68ff;
  border: 2px solid #4d4d4d;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 500;
  color: #fff;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  &:hover,
  &:focus {
    background-color: white;
    color: #2d68ff;
    border-color: #2d68ff;
  }
`;
