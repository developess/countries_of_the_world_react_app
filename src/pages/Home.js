import React from "react";
import { PageWrapper } from "../components";
import { css } from "styled-components";
import { Link } from "react-router-dom";

const welcome = css`
  text-align: center;
`;

const image = css`
  height: 200px;
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
`;

export const Home = () => {
  return (
    <PageWrapper>
      <div css={welcome}>
        <img
          css={image}
          src="http://pngimg.com/uploads/globe/globe_PNG43.png"
          alt="globe"
        />
        <h1>Welcome to Hello, World</h1>
        <p>An app to help you Discover countries of the world</p>
        <button css={buttonStyles}>
          <Link to="/countries">Expore</Link>
        </button>
      </div>
    </PageWrapper>
  );
};
