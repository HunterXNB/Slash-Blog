"use client";
import styled, { css, keyframes } from "styled-components";
const shine = keyframes`
     
  from{
    background-color: hsl(200deg 36.04% 79.4%);
  }
  to{
    background-color: hsl(200deg 6.9% 51.07%)
  }


`;
const StyledPost = styled.div<{ isLoading?: boolean }>`
  ${(props) =>
    props.isLoading
      ? css`
          height: 70px;
          border-radius: 8px;
          animation: 1.5s ${shine} linear infinite alternate;
        `
      : css`
          background-color: var(--color-grey-400);
          display: flex;
          flex-direction: column;
          padding: 0.5rem 1.25rem;
          border-radius: 8px;
        `}
  & > p {
    align-self: flex-end;
    font-weight: normal;
    font-size: 16;
  }
  h2 {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:hover {
    background-color: var(--color-grey-300);
  }
`;
export default StyledPost;
