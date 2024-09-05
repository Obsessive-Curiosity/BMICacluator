import styled from "styled-components";

function Header({ setVisible }) {
  const onClick = () => {
    setVisible(false);
  };

  return (
    <HeaderWrapper onClick={onClick}>
      <h1>BMI 계산기</h1>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  background-color: #2d68ff;
  color: white;
  text-align: center;
  padding: 25px 0;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
`;
export default Header;
