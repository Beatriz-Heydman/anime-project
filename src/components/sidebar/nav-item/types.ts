//Libs
import { ReactNode } from "react";

export type NavItemProps = {
  isSelected?: boolean;
  text: string;
  icon: ReactNode;
};

export type NavItemPropsStyled = {
  isSelected?: boolean;
};
