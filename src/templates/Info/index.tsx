import React from "react";
import { FlatList } from "react-native";

import { BannerImage } from "../../components/Atoms";
import { AnimatedItem, InfoItem } from "../../components/Organisms";

import { Container } from "./Info.styles";
import { InfoTemplateProps } from "./Info.types";

export const InfoTemplate = ({
  data,
  imageTag,
  image,
  testId,
}: InfoTemplateProps) => {
  return (
    <Container>
      <FlatList
        data={data}
        alwaysBounceVertical={false}
        keyExtractor={(item) => item.title}
        ListHeaderComponent={
          <BannerImage
            image={image}
            tag={imageTag}
            testId={`${testId}-header-component`}
          />
        }
        renderItem={({ item, index }) => (
          <AnimatedItem awaiting={index}>
            <InfoItem {...item} testId={`${testId}-item`} />
          </AnimatedItem>
        )}
      />
    </Container>
  );
};
