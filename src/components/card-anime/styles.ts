//Libs
import styled from "styled-components";

//Types
import { StyledCardProps } from "./types";

export const StyledCard = styled.div<StyledCardProps>`
  width: 173px;
  height: 257px;
  background-color: red;
  padding: 1rem 0;
  border-radius: 0.25rem;
  box-shadow: inset 0px -60px 16px 8px rgba(0, 0, 0, 0.56);
  background: ${({ animeImg }) => `url(${animeImg})`};
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: ${({ dubOrSubText }) =>
    dubOrSubText ? "space-between" : "flex-end"};
  gap: 0.3rem;
  flex-direction: column;

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
