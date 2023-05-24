//Libs
import styled from "styled-components";

//Types
import { StyledCardProps } from "./types";

export const StyledCard = styled.a<StyledCardProps>`
  width: 173px;
  height: 257px;
  padding: 1rem 0;
  border-radius: 0.25rem;
  box-shadow: inset 0px -60px 16px 8px rgba(0, 0, 0, 0.76);
  background: ${({ animeImg }) => `url(${animeImg})`};
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: ${({ dubOrSubText }) =>
    dubOrSubText ? "space-between" : "flex-end"};
  gap: 0.3rem;
  flex-direction: column;
  cursor: pointer;
  transition: all ease 0.8s;
  text-decoration: none;
  position: relative;
  z-index: 1;

  .anime_name {
    &::before {
      content: "";
      position: absolute;
      background: black;
      width: 100%;
      height: 100%;
      opacity: 0;
      top: 0;
      left: 0;
      z-index: -1;
      transition: all ease 0.8s;
    }
  }

  &:hover .anime_name::before {
    opacity: 0.6;
  }

  .dub_or_sub_container {
    background-color: #8627ff;
    width: 45px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
  }

  .line_card {
    height: 0.5px;
    width: 100%;
    background-color: #ffffff;
    display: flex;
  }
`;
