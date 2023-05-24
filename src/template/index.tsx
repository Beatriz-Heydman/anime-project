//Components
import { Button } from "../components/button";
import { Flex } from "../components/flex";
import { Input } from "../components/input";

//Types
import { TemplateProps } from "./types";

export function Template({ children }: TemplateProps) {
  return (
    <Flex
      direction="column"
      gap="2rem"
      style={{ width: "100%", padding: "2rem" }}
    >
      <Flex gap="1rem" style={{ width: "100%", padding: "1rem" }}>
        <Input />
        <Button onClick={() => {}}>Buscar</Button>
      </Flex>
      {children}
    </Flex>
  );
}
