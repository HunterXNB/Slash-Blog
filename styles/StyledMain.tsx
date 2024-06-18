"use client";

import styled, { RuleSet, css } from "styled-components";

const StyledMain = styled.main<{ styles?: string }>`
  padding: 5px 15px 10px;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  ${(props) =>
    props?.styles
      ? css`
          ${props.styles}
        `
      : ""}
  &>section> p {
    font-weight: bold;
    text-align: center;
    font-size: 24px;
  }
  section {
    display: grid;
    justify-content: center;
    align-content: start;
    flex: 1;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px 25px;
  }
  #pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    a {
      padding: 8px 15px;
      background-color: var(--color-indigo-100);
      border-radius: 8px;
      color: grey;
      &:hover {
        background-color: var(--color-indigo-700);
        color: white;
      }
    }
    span {
      padding: 8px 15px;
      border-radius: 8px;
      background-color: var(--color-indigo-700);
      color: white;
      cursor: not-allowed;
    }
  }
`;
export default StyledMain;
