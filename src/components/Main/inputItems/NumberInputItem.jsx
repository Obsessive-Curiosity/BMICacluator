import { useId } from "react";
import styled from "styled-components";

function NumberInputItem({ item, handler }) {
  const id = useId();

  return (
    <InputWrapper>
      <InputItem
        type="number"
        onChange={handler}
        step={0.1}
        id={id}
        placeholder={item === "키" ? "163cm" : "52kg"}
      />
      <LabelItem>
        {item}
        {item === "키" ? " (cm)" : " (kg)"}
      </LabelItem>
    </InputWrapper>
  );
}

export default NumberInputItem;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
`;
const LabelItem = styled.label`
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
`;
const InputItem = styled.input`
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
  &:focus + LabelItem {
    color: #2d68ff;
  }
`;
