//Libs
import styled from "styled-components";

export const StyledHomePage = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)),
    url("/assets/images/anime-crossover-background.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  .title_home_page {
    text-align: center;
    letter-spacing: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;

    @media (max-width: 1300px) {
      font-size: 10rem;
    }

    @media (max-width: 1150px) {
      font-size: 9rem;
    }

    @media (max-width: 1090px) {
      font-size: 8rem;
    }

    @media (max-width: 950px) {
      font-size: 7rem;
    }

    @media (max-width: 820px) {
      font-size: 6rem;
    }

    @media (max-width: 750px) {
      font-size: 5rem;
    }

    @media (max-width: 630px) {
      font-size: 4rem;
    }

    @media (max-width: 560px) {
      letter-spacing: 0;
      font-size: 4rem;
      writing-mode: vertical-lr;
      text-orientation: upright;
    }
  }
`;
