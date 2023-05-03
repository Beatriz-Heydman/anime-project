//Libs
import styled from "styled-components";

//Types
import { FlexProps } from "./types";

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${({ alignItems = "center" }) => alignItems};
  justify-content: ${({ justifyContent = "center" }) => justifyContent};
  flex-direction: ${({ direction = "row" }) => direction};
  gap: ${({ gap = "0" }) => gap};
  flex-wrap: ${({ flexWrap = "nowrap" }) => flexWrap};
`;
