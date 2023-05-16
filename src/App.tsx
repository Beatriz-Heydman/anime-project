//Components
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Flex } from "./components/flex";
import { Sidebar } from "./components/sidebar";
import { GeneralAnimesPage } from "./pages/general-animes";
import { HomePage } from "./pages/home";
import { MoviesPage } from "./pages/movies";
import { ReleaseAnimesPage } from "./pages/release-animes";

function App() {
  return (
    <BrowserRouter>
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
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<GeneralAnimesPage />} path="/general-animes" />
          <Route element={<MoviesPage />} path="/movies" />
          <Route element={<ReleaseAnimesPage />} path="/releases" />
        </Routes>
      </Flex>
    </BrowserRouter>
  );
}

export default App;
