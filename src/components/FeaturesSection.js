import React from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { grid, breakpoints } from "../utils";

const StyledImg = styled(Img)`
  width: 20vw;

  @media (${breakpoints.md.min}) and (${breakpoints.md.max}) {
    width: 12vw;
  }

  @media (${breakpoints.lg.min}) and (${breakpoints.lg.max}) {
    width: 12vw;
  }

  @media (${breakpoints.xlg}) {
    width: 8vw;
    max-width: 160px;
  }
`;

const Feature = ({ title, description, icon }) => (
  <div className="feature">
    <div className="img">
      <StyledImg alt={icon.alt_text} fluid={icon.localFile.sharp.fluid} />
    </div>
    <div className="text">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Section = styled.section`
  ${grid};
`;

const Content = styled.div`
  grid-area: content;

  display: grid;
  grid-template-rows: 4rem 1fr 4rem;
  grid-template-areas:
    "."
    "features"
    ".";

  > div.features {
    grid-area: features;
    display: grid;
    grid-row-gap: 4rem;

    @media (${breakpoints.lg.min}) and (${breakpoints.lg.max}) {
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 2rem;
    }

    @media (${breakpoints.xlg}) {
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 2rem;
    }

    > div.feature {
      display: grid;
      grid-row-gap: 2rem;
      justify-items: center;

      @media (${breakpoints.lg.min}) and (${breakpoints.lg.max}) {
        grid-template-rows: min-content 1fr;
      }
      @media (${breakpoints.xlg}) {
        grid-template-rows: min-content 1fr;
      }

      > div.text {
        text-align: center;
        display: grid;
        grid-row-gap: 1rem;
        @media (${breakpoints.lg.min}) and (${breakpoints.lg.max}) {
          grid-template-rows: min-content 1fr;
        }
        @media (${breakpoints.xlg}) {
          grid-template-rows: min-content 1fr;
        }
      }
    }
  }
`;

const FeaturesSection = ({ feature }) => {
  return (
    <Section>
      <Content>
        <div className="features">
          {feature.map(item => (
            <Feature key={item.icon.id} {...item} />
          ))}
        </div>
      </Content>
    </Section>
  );
};

export default FeaturesSection;
