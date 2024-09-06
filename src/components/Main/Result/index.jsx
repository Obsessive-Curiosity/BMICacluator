import styled from "styled-components";
import useResult from "../Hook/useResult";

function Result({ bmi }) {
  const [result, img] = useResult({ bmi });

  return (
    <ResultWrapper>
      <ImageWrapper>
        <img src={img.src} alt={img.alt} />
      </ImageWrapper>
      <h2>{result}</h2>
      <p>BMI 지수 : {bmi}</p>
    </ResultWrapper>
  );
}

export default Result;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    color: ${({ color }) => color};
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
  }
  margin-bottom: 30px;
`;
