import React from "react";
import { SectionList } from "react-native";

import { SectionTitle, Loading } from "../../components/Atoms";

import { SectionItem } from "../../components/Organisms";

import { Container } from "./List.styles";
import { ListTemplateProps } from "./List.types";

export const ListTemplate = ({
  sections,
  handleLoadMore,
  loading,
  onPress,
  onPressFavorite,
  favoriteList,
  testId,
}: ListTemplateProps) => {
  return (
    <Container testID={testId}>
      <SectionList
        windowSize={2}
        testID={`${testId}-section-list`}
        sections={sections}
        keyExtractor={(item, index) => `${item.id}-${item.name}-${index}`}
        onEndReached={handleLoadMore}
        ListFooterComponent={() => (
          <Loading loading={loading} testId={`${testId}-loading`} />
        )}
        renderItem={({ item, section }) => (
          <SectionItem
            id={item.id}
            image={item.image}
            isFavorite={!!favoriteList[item.id]}
            onFavoriteChange={() => onPressFavorite(item)}
            onPress={() => onPress(item, section.title)}
            sectionTitle={section.title}
            title={item.name}
            subtitle={item.species}
            testId={`${testId}-item`}
          />
        )}
        renderSectionHeader={({ section: { title, data } }) => (
          <SectionTitle
            title={title}
            visible={!!data.length}
            testId={`${testId}-header-component`}
          />
        )}
      />
    </Container>
  );
};
