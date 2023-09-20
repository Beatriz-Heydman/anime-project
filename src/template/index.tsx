/* eslint-disable react-hooks/exhaustive-deps */

//Libs
import { useState } from "react";

//Components
import { Button } from "../components/button";
import { Input } from "../components/input";
import { SessionTitle } from "../components/session-title";
import { CardAnime } from "../components/card-anime";
import { Flex } from "../components/flex";

//Styles
import { TemplateContainer } from "./styles";

//Types
import { SearchedAnime, TemplateProps } from "./types";
import { Pagination } from "../shared/types";

//Utils
import { validationSubtitleAnime } from "../utils/formatter-subtitle-anime";

//Services
import { api } from "../services/api";

//Routes
import { animeRoutes } from "../services/routes";

export function Template({ children }: TemplateProps) {
  const [searchedAnimes, setSearchedAnimes] = useState<SearchedAnime[]>([]);

  const [pagination, setPagination] = useState<Pagination>();

  const [isLoading, setIsLoading] = useState(false);

  const [inputValue, setInputValue] = useState("");

  async function getSearchAnimes(pageParam: number) {
    try {
      setIsLoading(true);

      const response = await api.get(animeRoutes.getSearchAnimes, {
        params: {
          page: pageParam,
          limit: 14,
          q: inputValue,
        },
      });
      setPagination(response.data.pagination);

      if (pageParam === 1) {
        setSearchedAnimes([...response.data.data]);
      } else {
        setSearchedAnimes([...searchedAnimes, ...response.data.data]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <TemplateContainer>
      <div className="search_content">
        <Input
          onChange={(event) => {
            setInputValue(event.currentTarget.value);
          }}
        />
        <Button
          disabled={isLoading || inputValue === ""}
          onClick={() => {
            getSearchAnimes(1);
          }}
        >
          Buscar
        </Button>
      </div>

      {searchedAnimes.length >= 1 && inputValue && (
        <SessionTitle title={`Resultados para: ${inputValue}`} />
      )}

      <Flex flexWrap="wrap" gap="1rem">
        {searchedAnimes.map((anime, index) => (
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
            getSearchAnimes(pagination.current_page + 1);
          }}
        >
          {isLoading ? "Carregando..." : "Carregar mais"}
        </Button>
      )}
      {children}
    </TemplateContainer>
  );
}
