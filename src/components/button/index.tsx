//Libs
import { ButtonHTMLAttributes } from "react";

//Styles
import { StyledButton } from "./styles";

//Types
import { ButtonProps } from "./types";

export function Button({
  background,
  padding,
  children,
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <StyledButton background={background} padding={padding} {...props}>
      {children}
    </StyledButton>
  );
}
