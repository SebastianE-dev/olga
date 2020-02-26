import React from "react";
import styled from "@emotion/styled";

const Header = styled.header`
  background-color: #fbf0e9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

const NavBar = () => {
  return (
    <Header>
      <h1>Olga</h1>
    </Header>
  );
};

export default NavBar;
