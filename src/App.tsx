//Components
import { Button } from "./components/button";
import { CardAnime } from "./components/card-anime";
import { Flex } from "./components/flex";
import { Input } from "./components/input";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <Flex
      justifyContent="flex-start"
      alignItems="flex-start"
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "#282c38",
      }}
    >
      <Sidebar />
      <Flex direction="column" style={{ width: "100%", padding: "2rem" }}>
        <Flex gap="1rem" style={{ width: "100%", padding: "2rem" }}>
          <Input />
          <Button />
        </Flex>
        <Flex gap="1.5rem" flexWrap="wrap">
          <CardAnime
            animeImg="https://th.bing.com/th/id/OIP.lCW9jmu3fpwCBZsO-1xF6QHaLu?pid=ImgDet&rs=1"
            animeName="Naruto"
            subtitle="Episodeo 2"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
