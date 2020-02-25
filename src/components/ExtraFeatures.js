import React from "react";
import styled from "@emotion/styled";
import { grid, breakpoints, fontWeight, fontSize } from "../utils";

const Section = styled.section`
  ${grid}
`;

const Content = styled.div`
  grid-area: content;
  display: grid;
  grid-template-rows: 3rem min-content 3rem min-content 3rem;
  grid-template-areas:
    "."
    "header"
    "."
    "features"
    ".";
  > div.header {
    grid-area: header;
    text-align: center;
  }
  > div.features {
    grid-area: features;
    display: grid;
    grid-row-gap: 3rem;

    @media (${breakpoints.lg.min}) and (${breakpoints.lg.max}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (${breakpoints.xlg}) {
      grid-template-columns: repeat(3, 1fr);
    }
    > div.text {
      display: grid;
      grid-row-gap: 1rem;
      text-align: center;
      justify-items: center;

      @media (${breakpoints.lg.min}) and (${breakpoints.lg.max}) {
        grid-template-rows: min-content min-content 1fr;
      }

      @media (${breakpoints.xlg}) {
        grid-template-rows: min-content min-content 1fr;
      }

      > div.num {
        border: 2px solid #f46445;
        color: #f46445;
        width: 30vw;
        height: 30vw;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1000px;

        @media (${breakpoints.md.min}) and (${breakpoints.md.max}) {
          width: 12vw;
          height: 12vw;
        }

        @media (${breakpoints.lg.min}) and (${breakpoints.lg.max}) {
          width: 8vw;
          height: 8vw;
        }

        @media (${breakpoints.xlg}) {
          width: 6vw;
          height: 6vw;
          max-width: 116px;
          max-height: 116px;
        }

        > h5 {
          font-size: ${fontSize.h3};
        }
      }
    }
  }
`;

const ExtraFeatures = ({ title, feature }) => {
  return (
    <Section>
      <Content>
        <div className="header">
          <h2>{title}</h2>
        </div>
        <div className="features">
          {feature.map((item, index) => (
            <div className="text" key={`extra${index}`}>
              <div className="num">
                <h5>{index + 1}</h5>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </Content>
    </Section>
  );
};

export default ExtraFeatures;
