import React from "react";

import { SectionItemButtonContainer } from "./SectionItemButton.styles";
import { SectionItemButtonProps } from "./SectionItemButton.types";

export const SectionItemButton = ({
  children,
  onPress,
  testId,
}: SectionItemButtonProps) => {
  return (
    <SectionItemButtonContainer onPress={onPress} testID={testId}>
      {children}
    </SectionItemButtonContainer>
  );
};
