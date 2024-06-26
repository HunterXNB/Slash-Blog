"use client";

import styled, { keyframes } from "styled-components";
const lds = keyframes`0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }`;
const StyledLoader = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  color: #1c4c5b;
  justify-content: center;
  position: relative;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid currentColor;
    border-radius: 50%;
    animation: ${lds} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: currentColor transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
export default StyledLoader;
