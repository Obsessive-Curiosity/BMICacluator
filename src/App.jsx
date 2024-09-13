import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header/index.jsx";
import Main from "./components/Main/index.jsx";
import Footer from "./components/Footer/index.jsx";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Header setVisible={setVisible} />
        <MainWrapper>
          <Main visible={visible} setVisible={setVisible} />
        </MainWrapper>
        <Footer />
      </AppWrapper>
    </>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh; /* 화면의 전체 높이를 차지하게 만듦 */
`;

const MainWrapper = styled.section`
  width: 80%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* 남은 공간을 채우도록 설정 */
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
