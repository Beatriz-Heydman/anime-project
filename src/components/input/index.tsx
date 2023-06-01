//Libs
import { CiSearch } from "react-icons/ci";

//Components
import { Flex } from "../flex";

//Styles
import { StyledInput } from "./styles";

export function Input(inputProps: React.HTMLAttributes<HTMLInputElement>) {
  return (
    <Flex style={{ width: "100%" }}>
      <CiSearch
        size="31px"
        style={{
          backgroundColor: "#8627ff",
          borderRadius: " 0.5rem 0 0 0.5rem",
          color: "#ffffff",
          padding: "0.2rem",
        }}
      />
      <StyledInput
        type="text"
        placeholder="Digite o nome do anime"
        {...inputProps}
      />
    </Flex>
  );
}
