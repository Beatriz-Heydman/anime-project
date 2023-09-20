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

  .search_content {
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  @media (max-width: 600px) {
    .search_content {
      flex-direction: column;
    }
  }
`;
