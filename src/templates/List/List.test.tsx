import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { Character } from "../../types/Api.types";

import { ListTemplate } from ".";

describe("<ListTemplate />", () => {
  const mockData = [
    {
      id: "1",
      name: "Character 1",
      image: "character-1.jpg",
      species: "Species A",
    },
  ] as Character[];

  const mockSections = [
    {
      title: "Section 1",
      data: mockData,
    },
  ];

  const mockHandleLoadMore = jest.fn();
  const mockOnPress = jest.fn();
  const mockOnPressFavorite = jest.fn();
  const mockFavoriteList: { [key: string]: Character } = {};

  const mockTestId = "list-template-test";

  it("renders ListTemplate component", () => {
    const { getByTestId, getAllByTestId } = render(
      <ListTemplate
        sections={mockSections}
        handleLoadMore={mockHandleLoadMore}
        loading={true}
        onPress={mockOnPress}
        onPressFavorite={mockOnPressFavorite}
        favoriteList={mockFavoriteList}
        testId={mockTestId}
      />
    );

    const container = getByTestId(mockTestId);
    expect(container).toBeDefined();

    const sectionList = getByTestId(`${mockTestId}-section-list`);
    expect(sectionList).toBeDefined();

    const loadingComponent = getByTestId(`${mockTestId}-loading`);
    expect(loadingComponent).toBeDefined();

    const sectionItems = getAllByTestId(`${mockTestId}-item`);
    expect(sectionItems.length).toBe(mockData.length);

    fireEvent.press(sectionItems[0]);

    expect(mockOnPress).toHaveBeenCalledWith(mockData[0], "Section 1");
  });
});
