//Styles
import { StyledCard } from "./styles";

//Components
import { Flex } from "../flex";
import { Typography } from "../typography";

//Types
import { CardAnimeProps } from "./types";

export function CardAnime({
  dubOrSubText,
  animeName,
  subtitle,
  animeImg,
}: CardAnimeProps) {
  return (
    <StyledCard dubOrSubText={dubOrSubText} animeImg={animeImg}>
      {dubOrSubText && (
        <Typography
          fontSize="0.7rem"
          fontFamily="Inter"
          fontWeight="400"
          className="dub_or_sub_container"
        >
          {dubOrSubText}
        </Typography>
      )}
      <Flex
        direction="column"
        alignItems="flex-start"
        gap="0.5rem"
        style={{ width: "100%", padding: "0 1rem" }}
      >
        <Typography fontSize="0.90rem" fontFamily="Inter" fontWeight="400">
          {animeName}
        </Typography>
        <div className="line_card"></div>
        <Typography fontSize="0.75rem" fontFamily="Inter" fontWeight="400">
          {subtitle}
        </Typography>
      </Flex>
    </StyledCard>
  );
}
