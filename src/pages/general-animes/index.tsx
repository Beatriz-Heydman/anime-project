//Libs
import { useEffect, useState } from "react";
import axios from "axios";

//Components
import { CardAnime } from "../../components/card-anime";
import { Flex } from "../../components/flex";
import { SessionTitle } from "../../components/session-title";
import { Template } from "../../template";

//Types
import { GeneralAnime } from "./types";

export function GeneralAnimesPage() {
  const generalAnimesRoute = "https://api.jikan.moe/v4/top/anime";

  const [generalAnimes, setGeneralAnimes] = useState<GeneralAnime[]>([]);

  async function getGeneralAnimes() {
    try {
      const response = await axios.get(generalAnimesRoute, {
        params: {
          limit: 16,
        },
      });

      setGeneralAnimes(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getGeneralAnimes();
  }, []);

  return (
    <Template>
      <SessionTitle title="Animes Populares" />
      <Flex flexWrap="wrap" gap="1rem">
        {generalAnimes.map((anime, index) => (
          <CardAnime
            key={index}
            animeName={anime.title}
            animeImg={anime.images.jpg.image_url}
            animeUrl={anime.url}
            subtitle={`${anime.episodes} Episodeos`}
          />
        ))}
      </Flex>
    </Template>
  );
}
