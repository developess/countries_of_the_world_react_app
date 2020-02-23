import React from "react";
import { PageWrapper } from "../components";
import { css } from "styled-components";
import { Link } from "react-router-dom";

const welcome = css`
  text-align: center;
`;

const image = css`
  height: 300px;
`;

const buttonStyles = css`
  background-color: dodgerblue;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0;
  a {
    padding: 10px 20px;
    display: block;
    text-decoration: none;
  }
  &:hover {
    transition: 0.3 ease;
    background-color: lightsteelblue;
  }
`;

export const Home = () => {
  return (
    <PageWrapper>
      <div css={welcome}>
        <img
          css={image}
          src="https://media.giphy.com/media/Ur1ePKk5h82J2nKUmm/giphy.gif"
          alt="globe"
        />
        <h1>Welcome to Hello, World</h1>
        <p>An app to help you discover countries of the world</p>
        <button css={buttonStyles}>
          <Link to="/countries">Explore</Link>
        </button>
      </div>
    </PageWrapper>
  );
};
