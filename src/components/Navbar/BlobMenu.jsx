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

export const BlobMenu = () => {
  return (
    <Center>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr 1fr",
          gridTemplateColumns: "1fr 1fr",
          padding: "1rem",
        }}
      >
        <div
          style={{
            padding: "1rem",
            borderRight: `1px solid ${colors.indianred}`,
            textAlign: "right",
          }}
        >
          <MenuLink to="/">Home</MenuLink>
        </div>

        <div
          style={{
            padding: "1rem",
            borderBottom: `1px solid ${colors.marigold}`,
          }}
        >
          <MenuLink to="/favourites">Favourites</MenuLink>
        </div>
        <div
          style={{
            padding: "1rem",
            borderTop: `1px solid ${colors.pine}`,
            textAlign: "right",
          }}
        >
          <MenuLink to="/search">Search</MenuLink>
        </div>
        <div
          style={{
            padding: "1rem",
            borderLeft: `1px solid ${colors.oliverhaze}`,
          }}
        >
          <MenuLink to="/">Log in</MenuLink>
        </div>
      </div>
    </Center>
  );
};
