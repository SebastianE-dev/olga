import React, { useState } from "react";
import styled from "@emotion/styled";
import { grid, fontSize, breakpoints } from "../utils";
import uuid from "uuid/v4";

import { css } from "@emotion/core";
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
  grid-template-rows: 5rem min-content 3rem min-content 5rem;
  grid-template-areas:
    "."
    "header"
    "."
    "packs"
    ".";

  > h2 {
    grid-area: header;
    text-align: center;
  }
  > div.packs {
    grid-area: packs;
    display: grid;
    grid-row-gap: 2rem;

    @media (${breakpoints.lg.min}) and (${breakpoints.lg.max}) {
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 4rem;
      align-items: center;
    }

    //
    // ─── EXTRA LARGE ────────────────────────────────────────────────────────────────
    //
    @media (${breakpoints.xlg}) {
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 4rem;
      align-items: center;
    }
    > div.pack {
      background-color: white;
      display: grid;
      grid-template-columns: 1rem 1fr 1rem;
      grid-template-rows: 2rem min-content 2rem min-content 2rem;
      grid-template-areas:
        ". . ."
        ". text ."
        ". . ."
        ". services ."
        ". . .";

      > div.text {
        grid-area: text;
        display: flex;
        justify-content: space-between;
      }
      > div.services {
        grid-area: services;
        display: grid;
        grid-row-gap: 2rem;

        > div.service {
          display: grid;
          grid-template-columns: 1fr min-content;
          grid-column-gap: 1rem;
          align-items: center;
        }
      }
    }
  }
  > div.modal {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(47, 38, 36, 0.92);
    width: 100vw;
    height: 100vh;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;

    > div.container {
      border-radius: 10px;
      background-color: white;
      position: relative;
      max-width: 500px;
      padding: 50px;
      > div.text {
        display: grid;
        grid-row-gap: 1rem;
      }
      > button {
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }
  }
`;

const ServiceOne = ({ text, toogle, hide }) => {
  return (
    <div className="modal">
      <div className="container">
        <div className="text">
          {text ? text.map(item => <p>{item.text}</p>) : null}
        </div>
        <button onClick={() => toogle(!hide)}>close</button>
      </div>
    </div>
  );
};

const PacksSection = ({ color, title, pack }) => {
  const [hide, setHide] = useState(true);
  const [key, setKey] = useState("");
  const handleClick = id => {
    setHide(false);
    setKey(id);
  };

  return (
    <Section bgColor={color}>
      <Content>
        <h2>{title}</h2>
        <div className="packs">
          {pack.map(item => (
            <div className="pack">
              <div className="text">
                <h3>{item.title}</h3>
                <h3>{`$${item.price}`}</h3>
              </div>
              <div className="services">
                {item.service.map(service => (
                  <div className="service">
                    <h4>{service.title}</h4>
                    <button onClick={() => handleClick(service.description)}>
                      click
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {!hide ? <ServiceOne text={key} toogle={setHide} hide={hide} /> : null}
      </Content>
    </Section>
  );
};

export default PacksSection;
