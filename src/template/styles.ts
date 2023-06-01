import styled from "styled-components";

export const TemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 2rem;
  overflow-x: hidden;
  margin-left: 70px;
  align-items: center;

  .search_container {
    display: flex;
    gap: 1rem;
    width: 100%;
    padding: 1rem;

    @media (max-width: 500px) {
      flex-direction: column;
    }
  }

  .search_button {
    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;
