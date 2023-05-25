//Libs
import { MouseEventHandler, ReactNode } from "react";

export type ButtonProps = {
  background?: string;
  padding?: string;
  children: ReactNode;
  onClick?: MouseEventHandler;
};

export type StyledButtonProps = {
  background?: string;
  padding?: string;
};
