import React from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import { grid, breakpoints } from "../utils";

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
  grid-template-rows: 4rem min-content 2rem min-content 4rem;
  grid-template-areas:
    "."
    "header"
    "."
    "logos"
    ".";

  > h2 {
    grid-area: header;
  }

  > div.logos {
    grid-area: logos;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;

    @media (${breakpoints.lg.min}) and (${breakpoints.lg.max}) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (${breakpoints.xlg}) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

const ClientsSection = ({ title, company }) => {
  return (
    <Section>
      <Content>
        <h2>{title}</h2>
        <div className="logos">
          {company.map(logo => (
            <div className="img" key={logo.logo.id}>
              <Img
                alt={logo.logo.alt_text}
                fluid={logo.logo.localFile.sharp.fluid}
                imgStyle={{
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </Content>
    </Section>
  );
};

export default ClientsSection;
