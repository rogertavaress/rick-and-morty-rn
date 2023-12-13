import React from "react";

import { SectionInfo, SectionInfoContainer } from "../../Atoms";

import { Container } from "./InfoItem.styles";
import { InfoItemProps } from "./InfoItem.types";

export const InfoItem = ({
  IconType,
  icon,
  title,
  value,
  testId,
}: InfoItemProps) => {
  return (
    <Container testID={testId}>
      <IconType name={icon as any} size={50} />
      <SectionInfoContainer>
        <SectionInfo type="subtitle" value={title} />
        <SectionInfo type="title" value={value} />
      </SectionInfoContainer>
    </Container>
  );
};
