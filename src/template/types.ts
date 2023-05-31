//Libs
import { ReactNode } from "react";

export type TemplateProps = {
  children: ReactNode;
};

export type SearchedAnime = {
  title: string;
  episodes: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
};
