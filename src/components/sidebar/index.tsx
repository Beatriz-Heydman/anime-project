//Libs
import { useState } from "react";
import { HiHome } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";
import { BsCameraReelsFill, BsFillRocketTakeoffFill } from "react-icons/bs";

//Styles
import { StyledSidebar } from "./styles";

//Components
import { Flex } from "../flex";
import { NavItem } from "./nav-item";
import { Typography } from "../typography";

export function Sidebar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const classNameMenuHamburger = isOpenSidebar
    ? "menu_hamburger is_open"
    : "menu_hamburger";

  return (
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
            fontFamily="Monofett"
            fontSize="1.5rem"
            style={{ letterSpacing: "0.2rem", color: "#e2cbffac" }}
          >
            animetrix
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
        <NavItem href="/movies" icon={<BsCameraReelsFill />} text="Filmes" />
        <NavItem
          href="/releases"
          icon={<BsFillRocketTakeoffFill />}
          text="Lançamentos"
        />
      </Flex>
    </StyledSidebar>
  );
}
