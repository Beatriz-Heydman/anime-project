//Libs
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import { Flex } from "./components/flex";
import { Sidebar } from "./components/sidebar";

//Pages
import { GeneralAnimesPage } from "./pages/general-animes";
import { HomePage } from "./pages/home";
import { MangasPage } from "./pages/mangas";
import { ReleaseAnimesPage } from "./pages/release-animes";

function App() {
  return (
    <BrowserRouter>
      <Flex
        justifyContent="flex-start"
        alignItems="flex-start"
        style={{
          height: "100%",
          width: "100vw",
          backgroundColor: "#282c38",
        }}
      >
        <Sidebar />
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<GeneralAnimesPage />} path="/general-animes" />
          <Route element={<MangasPage />} path="/mangas" />
          <Route element={<ReleaseAnimesPage />} path="/releases" />
        </Routes>
      </Flex>
    </BrowserRouter>
  );
}

export default App;
