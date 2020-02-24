import React from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import { grid, breakpoints, fontWeight } from "../utils";

const bgColor = props => css`
  background-color: ${props.bgColor};
`;

const Section = styled.section`
  ${grid};
  ${bgColor}
`;

const Content = styled.div`
  grid-area: content;

  display: grid;
  grid-template-rows: 3rem min-content 3rem min-content 3rem;
  grid-template-areas:
    "."
    "text"
    "."
    "img"
    ".";

  @media (${breakpoints.lg.min}) and (${breakpoints.lg.max}) {
    grid-template-rows: 3rem min-content 3rem;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-template-areas:
      ". ."
      "text img"
      ". .";
  }

  @media (${breakpoints.xlg}) {
    grid-template-rows: 3rem min-content 3rem;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-template-areas:
      ". ."
      "text img"
      ". .";
  }

  > div.text {
    grid-area: text;
    display: grid;
    color: white;
    grid-row-gap: 2rem;

    @media (${breakpoints.lg.min}) and (${breakpoints.lg.max}) {
      align-content: center;
    }
    @media (${breakpoints.xlg}) {
      align-content: center;
    }

    > div.paragraphs {
      display: grid;
      grid-row-gap: 1rem;
      > p {
        font-weight: ${fontWeight.regualr};
      }
    }
  }
  > div.image {
    grid-area: img;
  }
`;

const ExtraSection = ({ color, title, paragraphs, image }) => {
  return (
    <Section bgColor={color}>
      <Content>
        <div className="text">
          <h2>{title}</h2>
          <div className="paragraphs">
            {paragraphs.map((item, index) => (
              <p key={`paraNum${index}`}>{item.paragraph}</p>
            ))}
          </div>
        </div>
        <div className="image">
          <Img alt={image.alt_text} fluid={image.localFile.sharp.fluid} />
        </div>
      </Content>
    </Section>
  );
};

export default ExtraSection;
