import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../utilities";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  color: ${defaultTheme.textColor};
  text-decoration: none;
  text-transform: capitalize;
  color: #a4a3a4;
  font-size: 1rem;
`;

export const Sidebar = () => {
  return (
    <table
      style={{
        boder: "collapse",
        padding: " 2rem 4rem 2rem 4rem",
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              padding: "1rem",
              borderRight: "1px solid #a4a3a4",
              textAlign: "right",
            }}
          >
            <NavLink to="/">Home</NavLink>
          </td>
          <td
            style={{
              padding: "1rem",
              borderBottom: "1px solid #a4a3a4",
            }}
          >
            <NavLink to="/">Library</NavLink>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td
            style={{
              padding: "1rem",
              borderTop: "1px solid #a4a3a4",
              textAlign: "right",
            }}
          >
            <NavLink to="/">Register</NavLink>
          </td>
          <td
            style={{
              padding: "1rem",
              borderLeft: "1px solid #a4a3a4",
            }}
          >
            <NavLink to="/">Log in</NavLink>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
