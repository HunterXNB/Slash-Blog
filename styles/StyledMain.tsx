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
  section:has(> p) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  section:not(:has(> p)) {
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
  #post-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 30px;
    width: 70%;
    max-width: 750px;
    min-width: 300px;
    margin: auto;
    .form-control {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 10px;
      input,
      textarea {
        outline: none;
        padding: 8px;
        border: 1px solid;
        border-color: var(--color-grey-400);
        border-radius: 8px;
        caret-color: var(--color-indigo-700);
        color: var(--color-indigo-700);
      }
      textarea {
        resize: vertical;
        height: 200px;
      }
      .error-message {
        color: red;
      }
    }
    button {
      background-color: var(--color-indigo-700);
      outline: none;
      border: none;
      padding: 15px 32px;
      border-radius: 8px;
      color: white;
      align-self: flex-end;
      &:hover,
      &:disabled {
        background-color: var(--color-indigo-100);
        color: var(--color-indigo-700);
      }
      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`;
export default StyledMain;
