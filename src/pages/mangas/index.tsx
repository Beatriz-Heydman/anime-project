//Libs
import { useEffect, useState } from "react";

//Components
import { SessionTitle } from "../../components/session-title";
import { Template } from "../../template";
import { CardAnime } from "../../components/card-anime";
import { Flex } from "../../components/flex";

//Types
import { MangaAnime } from "./types";

//Utils
import { validationSubtitleAnime } from "../../utils/formatter-subtitle-anime";
import { animeRoutes } from "../../services/routes";
import { api } from "../../services/api";

export function MangasPage() {
  const [mangasAnimes, setMangasAnimes] = useState<MangaAnime[]>([]);

  async function getMangas() {
    try {
      const response = await api.get(animeRoutes.getMangas, {
        params: {
          limit: 16,
        },
      });

      setMangasAnimes(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMangas();
  }, []);

  return (
    <Template>
      <SessionTitle title="Mangás" />
      <Flex flexWrap="wrap" gap="1rem">
        {mangasAnimes.map((manga, index) => (
          <CardAnime
            key={index}
            animeName={manga.title}
            animeImg={manga.images.jpg.image_url}
            animeUrl={manga.url}
            subtitle={validationSubtitleAnime(manga.chapters, true)}
          />
        ))}
      </Flex>
    </Template>
  );
}
