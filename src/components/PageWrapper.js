import React from "react";
import { css } from "styled-components";

const wrapper = css`
  min-height: calc(100vh - 76px);
  padding: 40px 20px;
  background: #e0f3ff;
`;

export const PageWrapper = ({ children }) => {
  return <div css={wrapper}>{children}</div>;
};
