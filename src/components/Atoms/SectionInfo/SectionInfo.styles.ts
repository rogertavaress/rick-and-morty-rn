import styled from "styled-components/native";
import { SectionInfoTextProps } from "./SectionInfo.types";

export const SectionInfoText = styled.Text<SectionInfoTextProps>`
  font-weight: ${({ type }) => (type === "title" ? 600 : 400)};
  color: ${({ type }) => (type === "title" ? "black" : "#808080")};
`;
