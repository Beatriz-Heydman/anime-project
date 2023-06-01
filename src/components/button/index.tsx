//Styles
import { StyledButton } from "./styles";

//Types
import { ButtonProps } from "./types";

export function Button({
  background,
  padding,
  children,
  ...props
}: ButtonProps & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <StyledButton background={background} padding={padding} {...props}>
      {children}
    </StyledButton>
  );
}
