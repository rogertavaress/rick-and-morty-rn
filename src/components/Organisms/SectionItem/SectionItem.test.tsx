import React from "react";
import { render } from "@testing-library/react-native";
import { SectionItem } from ".";

describe("<SectionItem />", () => {
  const mockProps = {
    onPress: jest.fn(),
    sectionTitle: "sectionTitle",
    id: "1",
    image: "https://example.com/image.jpg",
    title: "Title",
    subtitle: "Subtitle",
    isFavorite: false,
    onFavoriteChange: jest.fn(),
    testId: "section-item-test",
  };

  it("renders SectionItem component with custom testIds", () => {
    const { getByTestId } = render(<SectionItem {...mockProps} />);

    const profileImage = getByTestId("section-item-test-profile-image");
    expect(profileImage).toBeDefined();

    const titleInfo = getByTestId("section-item-test-title");
    expect(titleInfo).toBeDefined();

    const subtitleInfo = getByTestId("section-item-test-subtitle");
    expect(subtitleInfo).toBeDefined();

    const favoriteButton = getByTestId("section-item-test-favorite-button");
    expect(favoriteButton).toBeDefined();

    const sectionItemButton = getByTestId("section-item-test");
    expect(sectionItemButton).toBeDefined();
  });
});
