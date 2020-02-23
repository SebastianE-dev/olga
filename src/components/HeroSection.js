import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Img from "gatsby-image";
import { grid, fontWeight, fontSize, breakpoints } from "../utils";

const bgColor = props => css`
  background-color: ${props.bgColor};
`;

const Content = styled.div`
  ${grid}
  height: 60vh;
  @media (${breakpoints.xlg}) {
    height: 50vh;
  }
`;

const Text = styled.div`
  grid-area: content;
  display: flex;
  align-items: center;
  justify-content: center;
  > h1 {
    font-weight: ${fontWeight.semiBold};
    font-size: ${fontSize.h1};
    text-align: center;
    max-width: 900px;

    @media (${breakpoints.lg.min}) and (${breakpoints.lg.max}) {
      font-size: ${fontSize.display4};
    }

    @media (${breakpoints.xlg}) {
      font-size: ${fontSize.display4};
    }
  }
`;
const Image = styled.div`
  grid-column: 1/-1;
  grid-row: 1/-1;
  z-index: -1;

  overflow: hidden;
`;

const StyledImg = styled(Img)`
  right: 300px;
  width: 220vw;

  @media (${breakpoints.md.min}) and (${breakpoints.md.max}) {
    right: 350px;
    width: 190vw;
  }
  @media (${breakpoints.lg.min}) and (${breakpoints.lg.max}) {
    width: 150vw;
  }
  @media (${breakpoints.xlg}) {
    right: 0;
    width: 100vw;
  }
`;

const Section = styled.div`
  ${bgColor}
`;
// ────────────────────────────────────────────────────────────────────────────────

const HeroSection = ({ title, image, color }) => {
  const {
    id,
    alt_text,
    localFile: { sharp },
  } = image;
  return (
    <Section bgColor={color}>
      <Content>
        <Text>
          <h1>{title}</h1>
        </Text>
      </Content>
      <Image className="img-container">
        <StyledImg
          className="image"
          alt={alt_text}
          fluid={sharp.fluid}
          key={id}
        />
      </Image>
    </Section>
  );
};

export default HeroSection;
