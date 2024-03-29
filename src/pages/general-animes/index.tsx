/* eslint-disable react-hooks/exhaustive-deps */

//Libs
import { useEffect, useState } from "react";

//Components
import { CardAnime } from "../../components/card-anime";
import { Flex } from "../../components/flex";
import { SessionTitle } from "../../components/session-title";
import { Button } from "../../components/button";

//Types
import { GeneralAnime } from "./types";
import { Pagination } from "../../shared/types";

//Services
import { api } from "../../services/api";

//Routes
import { animeRoutes } from "../../services/routes";

//Template
import { Template } from "../../template";

export function GeneralAnimesPage() {
  const [generalAnimes, setGeneralAnimes] = useState<GeneralAnime[]>([]);

  const [pageParam, setPageParam] = useState(1);

  const [pagination, setPagination] = useState<Pagination | undefined>();

  const [isLoading, setIsLoading] = useState(false);

  async function getGeneralAnimes() {
    try {
      setIsLoading(true);

      const response = await api.get(animeRoutes.getAnimes, {
        params: {
          limit: 14,
          page: pageParam,
        },
      });
      setPagination(response.data.pagination);
      setGeneralAnimes([...generalAnimes, ...response.data.data]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getGeneralAnimes();
  }, [pageParam]);

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
