import React from "react";
import { css, Global } from "@emotion/core";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Seo from "../seo/Seo";

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
      <Seo />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
