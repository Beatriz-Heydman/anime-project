//Styles
import { StyledNavItem } from "./styles";

//Types
import { NavItemProps } from "./types";

export function NavItem({ icon, text, isSelected }: NavItemProps) {
  return (
    <StyledNavItem isSelected={isSelected}>
      <div className="icon">{icon}</div>

      <a href="" className="text_nav">
        {text}
      </a>
    </StyledNavItem>
  );
}
