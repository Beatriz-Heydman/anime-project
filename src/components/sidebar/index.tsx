//Libs
import { useState } from "react";

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
      <Flex>
        <NavItem />
      </Flex>
    </StyledSidebar>
  );
}
