import React from "react";
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-content: center;

  > p {
    font-size: 0.7rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Development by Sebastian E</p>
    </StyledFooter>
  );
};

export default Footer;
