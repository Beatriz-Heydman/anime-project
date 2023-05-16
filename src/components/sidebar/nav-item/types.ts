//Libs
import { ReactNode } from "react";

export type NavItemProps = {
  text: string;
  icon: ReactNode;
  href: string;
};

export type NavItemPropsStyled = {
  isSelected?: boolean;
};
