import React from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import { grid, fontSize, breakpoints } from "../utils";

const StyledImg = styled(Img)`
  border-radius: 10px;
`;

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
    "header"
    "."
    "testimonial"
    ".";

  > h2 {
    grid-area: header;
  }
  > div.testimonial {
    grid-area: testimonial;
    display: grid;
    grid-row-gap: 2rem;

    > div.img-and-text {
      display: grid;
      grid-row-gap: 1rem;
      > div.images {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 1rem;
      }
      > div.text {
        display: grid;
        grid-row-gap: 1rem;
      }
    }
    @media (${breakpoints.lg.min}) and (${breakpoints.lg.max}) {
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 1rem;
    }

    //
    // ─── EXTRA LARGE ────────────────────────────────────────────────────────────────
    //
    @media (${breakpoints.xlg}) {
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 1rem;
    }
  }
`;

const Testimonials = ({ title, color, testimonial }) => {
  const { description, name, images } = testimonial;
  const { alt_text, localFile } = images[1].image;
  const TwoImages = [{ ...images[0].image }, { ...images[2].image }];
  return (
    <Section bgColor={color}>
      <Content>
        <h2>{title}</h2>
        <div className="testimonial">
          <div className="big-img">
            <StyledImg alt={alt_text} fluid={localFile.sharp.fluid} />
          </div>
          <div className="img-and-text">
            <div className="images">
              {TwoImages.map(image => (
                <div className="img" key={image.id}>
                  <StyledImg
                    alt={image.alt_text}
                    fluid={image.localFile.sharp.fluid}
                    imgStyle={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="text">
              <p>{description}</p>
              <h5>{name}</h5>
            </div>
          </div>
        </div>
      </Content>
    </Section>
  );
};

export default Testimonials;
