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
import { MangaAnime, Pagination } from "./types";

//Utils
import { validationSubtitleAnime } from "../../utils/formatter-subtitle-anime";

//Services
import { api } from "../../services/api";

// Routes
import { animeRoutes } from "../../services/routes";

export function MangasPage() {
  const [mangasAnimes, setMangasAnimes] = useState<MangaAnime[]>([]);

  const [pageParam, setPageParam] = useState(1);

  const [pagination, setPagination] = useState<Pagination | undefined>();

  const [isLoading, setIsLoading] = useState(true);

  async function getMangas() {
    try {
      setIsLoading(true);
      const response = await api.get(animeRoutes.getMangas, {
        params: {
          limit: 14,
          page: pageParam,
        },
      });

      setPagination(response.data.pagination);

      if (mangasAnimes.length > 0) {
        setMangasAnimes([...mangasAnimes, ...response.data.data]);
      } else {
        setMangasAnimes(response.data.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getMangas();
  }, [pageParam]);

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
