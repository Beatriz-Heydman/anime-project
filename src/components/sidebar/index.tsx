//Libs
import { useState } from "react";
import { HiHome } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { MdMenuBook } from "react-icons/md";

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
            fontSize="1.5rem"
            style={{ letterSpacing: "0.2rem", color: "#ffffffc7" }}
          >
            Animetrix
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
  );
}
