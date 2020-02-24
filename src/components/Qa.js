import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { grid, fontSize } from "../utils";

const bgColor = props => css`
  background-color: ${props.bgColor};
`;

const Section = styled.section`
  ${grid};
  ${bgColor}
`;

const Content = styled.div`
  grid-area: content;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  color: white;

  > h2 {
    font-size: ${fontSize.h1};
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
  }
`;

const Qa = ({ color, title }) => {
  return (
    <Section bgColor={color}>
      <Content>
        <h2>{title}</h2>
      </Content>
    </Section>
  );
};

export default Qa;
