//Components
import { Button } from "./components/button";
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
      <Flex gap="1rem" style={{ width: "100%", padding: "2rem" }}>
        <Input />
        <Button />
      </Flex>
    </Flex>
  );
}

export default App;
