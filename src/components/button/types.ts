//Libs
import { ChangeEvent } from "react";

export type ButtonProps = {
  background?: string;
  text?: string;
  padding?: string;
  onClick?: (event: ChangeEvent) => void;
};
