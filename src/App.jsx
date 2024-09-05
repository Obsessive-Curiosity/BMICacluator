import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header/index.jsx";
import Main from "./components/Main/index.jsx";
import Footer from "./components/Footer/index.jsx";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState({
    height: "",
    weight: "",
  });

  return (
    <>
      <GlobalStyle />
      <Header setVisible={setVisible} setInput={setInput} />
      <MainWrapper>
        <Main
          visible={visible}
          setVisible={setVisible}
          input={input}
          setInput={setInput}
        />
      </MainWrapper>
      <Footer />
    </>
  );
}

export default App;

const MainWrapper = styled.section`
  width: 80%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

// 전역 스타일 정의
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: Arial, sans-serif;
  }
`;
