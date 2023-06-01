//Components
import { Button } from "../components/button";
import { Input } from "../components/input";
import { TemplateContainer } from "./styles";

//Types
import { TemplateProps } from "./types";

export function Template({ children }: TemplateProps) {
  return (
    <TemplateContainer>
      <div className="search_container">
        <Input />
        <Button className="search_button">Buscar</Button>
      </div>
      {children}
    </TemplateContainer>
  );
}
