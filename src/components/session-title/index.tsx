//Styles
import { StyledSessionTitle } from "./styles";

//Types
import { SessionTitleProps } from "./types";

export function SessionTitle({ title }: SessionTitleProps) {
  return <StyledSessionTitle>{title}</StyledSessionTitle>;
}
