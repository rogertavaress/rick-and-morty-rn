import React from "react";

import { SectionTitleText } from "./SectionTitle.styles";
import { SectionTitleProps } from "./SectionTitle.types";

export const SectionTitle = ({ title, visible, testId }: SectionTitleProps) => {
  return (
    visible && <SectionTitleText testID={testId}>{title}</SectionTitleText>
  );
};
