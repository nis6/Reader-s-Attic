import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../utilities";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  color: ${defaultTheme.textColor};
  text-decoration: none;
  text-transform: capitalize;
  font-family: ${defaultTheme.SecondaryFont};
  font-size: ${defaultTheme.typeScale.header5};
  z-index: 10;
`;

export const Sidebar = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <NavLink to="/">Home</NavLink>
          </td>
          <td>
            <NavLink to="/">Library</NavLink>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>
            <NavLink to="/">Register</NavLink>
          </td>
          <td>
            <NavLink to="/">Log in</NavLink>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
