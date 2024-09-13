import Input from "./Input";
import Result from "./Result";
import { useState } from "react";
import styled from "styled-components";

function Main({ visible, setVisible }) {
  const [bmi, setBmi] = useState(0);

  return (
    <>
      <Card>
        <Input setBmi={setBmi} setVisible={setVisible} />
      </Card>
      {visible && (
        <Card>
          <Result bmi={bmi} visible={visible} />
        </Card>
      )}
    </>
  );
}

export default Main;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px;
  margin-bottom: 15px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;
