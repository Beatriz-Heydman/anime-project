//Libs
import styled from "styled-components";

//Types
import { NavItemPropsStyled } from "./types";

export const StyledNavItem = styled.nav<NavItemPropsStyled>`
  display: flex;
  gap: 1.6rem;
  padding: 1.5rem;
  position: relative;
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    filter: brightness(1.5);
  }

  &:before {
    content: "";
    position: absolute;
    width: 5px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    height: ${({ isSelected }) => (isSelected ? "50%" : "0")};
    background: #8627ff;
    transition: all ease 0.2s;
    left: 0;
    top: 50%;
    transform: translate(0%, -50%);
  }

  .text_nav,
  .icon {
    color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#797b86")};
  }

  .text_nav {
    white-space: nowrap;
    text-decoration: none;
    font-family: "Inter";
    font-size: 1rem;
  }

  .icon {
    display: flex;
    align-items: center;
    font-size: 20px;
    transition: all ease 0.2s;
  }
`;
