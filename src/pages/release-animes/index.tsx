/* eslint-disable react-hooks/exhaustive-deps */

//Libs
import axios from "axios";
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

export function ReleaseAnimesPage() {
  const releaseAnimesRoute = "https://api.jikan.moe/v4/seasons/now";

  const [releaseAnimes, setReleaseAnimes] = useState<ReleaseAnime[]>([]);

  const [pageParam, setPageParam] = useState(1);

  const [pagination, setPagination] = useState<Pagination | undefined>();

  async function getReleaseAnimes() {
    try {
      const response = await axios.get(releaseAnimesRoute, {
        params: {
          limit: 15,
          page: pageParam,
        },
      });
      setPagination(response.data.pagination);
      if (releaseAnimes.length > 0) {
        setReleaseAnimes([...releaseAnimes, ...response.data.data]);
      } else {
        setReleaseAnimes(response.data.data);
      }
    } catch (error) {
      console.error(error);
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
          Carregar mais
        </Button>
      )}
    </Template>
  );
}
