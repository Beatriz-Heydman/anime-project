//Components
import { Button } from "./components/button";
import { Flex } from "./components/flex";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <Flex
      justifyContent="flex-start"
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "#282c38",
      }}
    >
      <Sidebar />
      {/* <Button /> */}
    </Flex>
  );
}

export default App;
