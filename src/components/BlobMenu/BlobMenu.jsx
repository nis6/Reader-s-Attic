import React from "react";
import styled from "styled-components";
import { Center, colors } from "../../utilities";
import { Link } from "react-router-dom";

const MenuLink = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
  color: ${colors.grey};
  font-size: 1rem;
  &:hover {
    color: ${colors.ivory100};

    cursor: pointer;
  }
  @media (min-width: 700px) {
    font-size: 1rem;
  }
`;

export const Sidebar = () => {
  return (
    <Center>
      <div
        style={{
          display: " grid",
          gridTemplateRows: "1fr 1fr",
          gridTemplateColumns: "1fr 1fr",
          padding: "3rem",
        }}
      >
        <div
          style={{
            padding: "2rem",
            borderRight: `1px solid ${colors.indianred}`,
            textAlign: "right",
          }}
        >
          <MenuLink to="/">Home</MenuLink>
        </div>

        <div
          style={{
            padding: "2rem",
            borderBottom: `1px solid ${colors.marigold}`,
          }}
        >
          <MenuLink to="/">Favourites</MenuLink>
        </div>
        <div
          style={{
            padding: "2rem",
            borderTop: `1px solid ${colors.pine}`,
            textAlign: "right",
          }}
        >
          <MenuLink to="/search">Seacrh</MenuLink>
        </div>
        <div
          style={{
            padding: "2rem",
            borderLeft: `1px solid ${colors.oliverhaze}`,
          }}
        >
          <MenuLink to="/">Log in</MenuLink>
        </div>
      </div>
    </Center>
  );
};
