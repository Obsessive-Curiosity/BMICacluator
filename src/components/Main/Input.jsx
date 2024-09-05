import styled from "styled-components";
import { useState } from "react";

function Input({ setBmi, setVisible }) {
  const [input, setInput] = useState({
    height: 0,
    weight: 0,
  });

  const onChangeHeight = (e) => {
    setInput({
      ...input,
      height: parseFloat(e.target.value) / 100,
    });
  };

  const onChangeWeight = (e) => {
    setInput({
      ...input,
      weight: parseFloat(e.target.value),
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const bmiValue = input.weight / input.height ** 2;
    setBmi(bmiValue.toFixed(2));
    setVisible(true);
  };

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <InputWrapper>
          <input
            onChange={onChangeHeight}
            type="text"
            id="height"
            className="item-input"
            placeholder="163cm"
          />
          <label htmlFor="height" className="item-label">
            키
          </label>
        </InputWrapper>
        <InputWrapper>
          <input
            onChange={onChangeWeight}
            type="text"
            id="weight"
            className="item-input"
            placeholder="52kg"
          />
          <label htmlFor="weight" className="item-label">
            몸무게
          </label>
        </InputWrapper>
        <SubmitBtn type="submit">BMI계산</SubmitBtn>
      </form>
    </>
  );
}

export default Input;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  .item-label {
    position: absolute;
    background: white;
    top: 7%;
    left: 12px;
    transform: translateY(-50%);
    z-index: 4;
    height: 16px;
    padding: 0 4px;
    font-size: 13px;
    font-weight: 450;
    line-height: 14px;
    transition: color 0.2s;
  }
  .item-input {
    width: 100%;
    position: relative;
    height: 48px;
    padding: 0 14px;
    border: 2px solid #4d4d4d;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 450;
    caret-color: #1f93ff;
    margin-bottom: 6px;
  }
  .item-input:focus + .item-label {
    color: #2d68ff; /* 포커스 시 라벨 색상 변경 */
  }
`;

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
