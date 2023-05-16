//Styles
import { useNavigate, useLocation } from "react-router-dom";
import { StyledNavItem } from "./styles";

//Types
import { NavItemProps } from "./types";

export function NavItem({ icon, text, href }: NavItemProps) {
  const navigation = useNavigate();

  const { pathname } = useLocation();

  return (
    <StyledNavItem
      className="styled_nav_item"
      isSelected={pathname === href}
      onClick={() => {
        navigation(href);
      }}
    >
      <div className="icon">{icon}</div>

      <span className="text_nav">{text}</span>
    </StyledNavItem>
  );
}
