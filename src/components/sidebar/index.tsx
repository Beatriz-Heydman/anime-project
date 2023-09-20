//Libs
import { useState } from "react";
import { HiHome } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { MdMenuBook } from "react-icons/md";

//Components
import { Flex } from "../flex";
import { NavItem } from "./nav-item";
import { Typography } from "../typography";

//Styles
import { Overlay, StyledSidebar } from "./styles";

export function Sidebar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const classNameMenuHamburger = isOpenSidebar
    ? "menu_hamburger is_open"
    : "menu_hamburger";

  return (
    <>
      <Overlay
        isOpenSidebar={isOpenSidebar}
        onClick={() => {
          setIsOpenSidebar(false);
        }}
      />

      <StyledSidebar isOpenSidebar={isOpenSidebar}>
        <div className="container_menu_hamburger">
          <button
            className={classNameMenuHamburger}
            onClick={() => {
              setIsOpenSidebar(!isOpenSidebar);
            }}
          >
            <span className="bar top_bar" />
            <span className="bar middle_bar" />
            <span className="bar bottom_bar" />
          </button>
          {isOpenSidebar && (
            <Typography
              fontSize="1.5rem"
              style={{ letterSpacing: "0.2rem", color: "#ffffffc7" }}
            >
              Anime
            </Typography>
          )}
        </div>
        <Flex direction="column" alignItems="flex-start">
          <NavItem href="/" icon={<HiHome />} text="Início" />
          <NavItem
            href="/general-animes"
            icon={<FaPlay />}
            text="Animes Populares"
          />
          <NavItem href="/mangas" icon={<MdMenuBook />} text="Mangás" />
          <NavItem
            href="/releases"
            icon={<BsFillRocketTakeoffFill />}
            text="Lançamentos"
          />
        </Flex>
      </StyledSidebar>
    </>
  );
}
