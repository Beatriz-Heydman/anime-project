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
        {isOpenSidebar && <span>AnimetriX</span>}
      </div>
      <Flex direction="column" alignItems="flex-start">
        <NavItem icon={<HiHome />} text="Início" isSelected />
        <NavItem icon={<FaPlay />} text="Animes Populares" />
        <NavItem icon={<BsCameraReelsFill />} text="Filmes" />
        <NavItem icon={<BsFillRocketTakeoffFill />} text="Lançamentos" />
      </Flex>
    </StyledSidebar>
  );
}
