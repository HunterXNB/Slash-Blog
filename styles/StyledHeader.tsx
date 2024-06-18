"use client";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 70px;
  padding: 10px 15px;
  display: flex;
  background: var(--color-brand-500);
  color: var(--color-grey-900);
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  a {
    transition: color 0.75s;
  }
  a:hover {
    color: var(--color-grey-200);
  }
`;
export default StyledHeader;
