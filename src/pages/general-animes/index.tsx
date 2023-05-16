//Components
import { CardAnime } from "../../components/card-anime";
import { Flex } from "../../components/flex";
import { Template } from "../../template";

export function GeneralAnimesPage() {
  return (
    <Template>
      <Flex gap="1.5rem" flexWrap="wrap">
        <CardAnime
          animeImg="https://th.bing.com/th/id/OIP.lCW9jmu3fpwCBZsO-1xF6QHaLu?pid=ImgDet&rs=1"
          animeName="Naruto"
          subtitle="Episodeo 2"
        />
      </Flex>
    </Template>
  );
}
