//Styles
import { StyledButton } from "./styles";

//Types
import { ButtonProps } from "./types";

export function Button({
  children,
  background,
  padding,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <StyledButton
      disabled={disabled}
      background={background}
      padding={padding}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
