/* eslint-disable react-hooks/exhaustive-deps */

//Libs
import { useEffect, useState } from "react";

//Components
import { SessionTitle } from "../../components/session-title";
import { Template } from "../../template";
import { CardAnime } from "../../components/card-anime";
import { Flex } from "../../components/flex";
import { Button } from "../../components/button";

//Types
import { Pagination, ReleaseAnime } from "./types";

//Utils
import { validationSubtitleAnime } from "../../utils/formatter-subtitle-anime";

//Services
import { api } from "../../services/api";

//Routes
import { animeRoutes } from "../../services/routes";

export function ReleaseAnimesPage() {
  const [releaseAnimes, setReleaseAnimes] = useState<ReleaseAnime[]>([]);

  const [pageParam, setPageParam] = useState(1);

  const [pagination, setPagination] = useState<Pagination | undefined>();

  const [isLoading, setIsLoading] = useState(true);

  async function getReleaseAnimes() {
    try {
      setIsLoading(true);

      const response = await api.get(animeRoutes.getSeasonAnimes, {
        params: {
          page: pageParam,
          limit: 14,
        },
      });

      setPagination(response.data.pagination);
      setReleaseAnimes([...releaseAnimes, ...response.data.data]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getReleaseAnimes();
  }, [pageParam]);

  return (
    <Template>
      <SessionTitle title="Lançamentos" />
      <Flex flexWrap="wrap" gap="1rem">
        {releaseAnimes.map((anime, index) => (
          <CardAnime
            key={index}
            animeName={anime.title}
            animeImg={anime.images.jpg.image_url}
            animeUrl={anime.url}
            subtitle={validationSubtitleAnime(anime.episodes, false)}
          />
        ))}
      </Flex>
      {pagination?.has_next_page && (
        <Button
          background="rgba(134, 39, 255, 0.25)"
          onClick={() => {
            setPageParam(pageParam + 1);
          }}
        >
          {isLoading ? "Carregando..." : "Carregar mais"}
        </Button>
      )}
    </Template>
  );
}
