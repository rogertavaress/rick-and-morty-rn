import React from "react";

import { SectionInfoProps } from "./SectionInfo.types";
import { SectionInfoText } from "./SectionInfo.styles";

export const SectionInfo = ({ type, value, testId }: SectionInfoProps) => {
  return (
    <SectionInfoText testID={testId} type={type}>
      {value}
    </SectionInfoText>
  );
};
