//Styles
import { StyledButton } from "./styles";

//Types
import { ButtonProps } from "./types";

export function Button({
  children,
  background,
  padding,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton background={background} padding={padding} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
