//Libs
import styled from "styled-components";

//Types
import { StyledButtonProps } from "./types";

export const StyledButton = styled.button<StyledButtonProps>`
  width: fit-content;
  background-color: ${({ background = "#8627ff" }) => background};
  padding: ${({ padding = "0.5rem 1rem" }) => padding};
  color: #ffffff;
  border-radius: 0.5rem;
  border: none;
  box-shadow: inset 0px -3px 0px 1px #5a08c2;
  cursor: pointer;
  transition: all ease 0.4s;

  &:hover {
    background-color: #a057ff;
  }

  &:disabled {
    cursor: default;
    filter: brightness(0.7);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
