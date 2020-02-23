import React from "react";
import { css, Global } from "@emotion/core";
import styled from "@emotion/styled";
const Main = styled.main`
  padding-top: 80px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
        `}
      />
      {/* navbar */}
      <Main>{children}</Main>
      {/* footer */}
    </>
  );
};

export default Layout;
