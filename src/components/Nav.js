import React from "react";
import { Link } from "react-router-dom";
import { css } from "styled-components";

// Sea: #349eeb
// Land: #27dba2
// Dark land: #11ad7c
const nav = css`
  background-color: #11ad7c;
  color: white;
  padding: 20px;
`;

const optionList = css`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  line-height: 36px;

  li {
    ${navItem}
  }
  li:not(:last-child) {
    margin-right: 40px;
  }
`;

const navItem = css`
  transition: 0.5s ease;
  color: white;
  font-weight: 500;
  a {
    text-decoration: none;
  }
  a:hover {
    opacity: 0.8;
  }
`;

export const Nav = () => (
  <nav css={nav}>
    <ul css={optionList}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/countries">Explore</Link>
      </li>
    </ul>
  </nav>
);
