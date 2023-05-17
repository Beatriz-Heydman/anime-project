import styled from "styled-components";

export const StyledHomePage = styled.div`
  width: 100%;
  height: 100vh;
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
    color: #e2cbffac;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
  }

  @media (max-width: 1300px) {
    .title_home_page {
      font-size: 10rem;
    }
  }

  @media (max-width: 1150px) {
    .title_home_page {
      font-size: 9rem;
    }
  }

  @media (max-width: 1090px) {
    .title_home_page {
      font-size: 8rem;
    }
  }

  @media (max-width: 950px) {
    .title_home_page {
      font-size: 7rem;
    }
  }

  @media (max-width: 820px) {
    .title_home_page {
      font-size: 6rem;
    }
  }

  @media (max-width: 750px) {
    .title_home_page {
      font-size: 5rem;
    }
  }

  @media (max-width: 630px) {
    .title_home_page {
      font-size: 4rem;
    }
  }

  @media (max-width: 560px) {
    .title_home_page {
      letter-spacing: 0;
      font-size: 4rem;
      writing-mode: vertical-lr;
      text-orientation: upright;
    }
  }
`;
