import styled from "styled-components";

const FooterWrapper = styled.footer`
  text-align: center;
`;

export default Footer;

function Footer() {
  return (
    <FooterWrapper>
      참조 : 대한비만학회 제공 &quot;비만 치료지침(2022 8판)&quot; 기준
    </FooterWrapper>
  );
}
