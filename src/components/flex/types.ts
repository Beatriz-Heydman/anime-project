export type FlexProps = {
  gap?: string;
  direction?: "column" | "row";
  flexWrap?: "nowrap" | "wrap";
  alignItems?: "center" | "flex-start" | "flex-end";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
};
