//Components
import { Typography } from "../../components/typography";

//Styles
import { StyledHomePage } from "./styles";

export function HomePage() {
  return (
    <StyledHomePage>
      <Typography
        className="title_home_page"
        fontFamily="Monofett"
        fontSize="13rem"
        color="#e2cbffac"
      >
        animetrix
      </Typography>
    </StyledHomePage>
  );
}
