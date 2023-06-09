//Libs
import styled from "styled-components";

//Types
import { SidebarProps } from "./types";

export const StyledSidebar = styled.div<SidebarProps>`
  background-color: #1f2531;
  max-height: 100vh;
  height: 100%;
  min-width: ${({ isOpenSidebar }) => (isOpenSidebar ? "230px" : "70px")};
  transition: all ease 0.2s;
  position: fixed;
  top: 0;
  z-index: 999;

  @media (max-width: 500px) {
    min-width: ${({ isOpenSidebar }) => (isOpenSidebar ? "100vw" : "70px")};
  }

  .container_menu_hamburger {
    padding: 1.5rem 0.5rem;
    display: flex;
    align-items: center;
    color: white;
    justify-content: center;
    gap: 2rem;
    box-shadow: inset 0px 0px 12px 4px rgba(255, 255, 255, 0.14);
    font-family: "Megrim";
    font-size: 24px;
  }

  .text_nav {
    display: ${({ isOpenSidebar }) => (isOpenSidebar ? "flex" : "none")};
  }
  .styled_nav_item {
    margin-top: ${({ isOpenSidebar }) => (isOpenSidebar ? "0" : "1rem")};
  }

  .menu_hamburger {
    display: flex;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
    background: none;
    justify-content: center;
    border: none;
    width: 24px;
    height: 24px;

    &.is_open {
      .middle_bar {
        transform: rotate(-45deg);
      }

      .top_bar {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        transform: rotate(45deg) translate(3px, 2px);
      }

      .bottom_bar {
        transform: rotate(45deg) translate(4px, -9.25px);
      }
    }

    .bar {
      transition: all ease 0.2s;
      height: 2px;
      width: 100%;
      background: white;
      border-radius: 8px;
    }

    .top_bar,
    .bottom_bar {
      width: 12px;
    }
  }
`;

export const Overlay = styled.div<{ isOpenSidebar: boolean }>`
  background: #00000040;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;

  pointer-events: ${({ isOpenSidebar }) =>
    isOpenSidebar ? "default" : "none"};
  opacity: ${({ isOpenSidebar }) => (isOpenSidebar ? "1" : "0")};
  cursor: pointer;
`;
