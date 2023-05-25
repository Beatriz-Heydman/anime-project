//Libs
import { useEffect, useState } from "react";

//Components
import { CardAnime } from "../../components/card-anime";
import { Flex } from "../../components/flex";
import { SessionTitle } from "../../components/session-title";
import { Template } from "../../template";

//Types
import { GeneralAnime } from "./types";

//Services
import { api } from "../../services/api";

//Routes
import { animeRoutes } from "../../services/routes";

export function GeneralAnimesPage() {
  const [generalAnimes, setGeneralAnimes] = useState<GeneralAnime[]>([]);

  async function getGeneralAnimes() {
    try {
      const response = await api.get(animeRoutes.getAnimes, {
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
