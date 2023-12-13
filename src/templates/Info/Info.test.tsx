import React from "react";
import { Text } from "react-native";
import { render } from "@testing-library/react-native";
import { InfoTemplate } from ".";

describe("<InfoTemplate />", () => {
  const mockData = [
    {
      title: "Title 1",
      value: "Value 1",
      icon: "icon-name-1",
      IconType: Text,
    },
    {
      title: "Title 2",
      value: "Value 2",
      icon: "icon-name-2",
      IconType: Text,
    },
  ];

  const mockImage = "https://example.com/image.jpg";
  const mockImageTag = "image-tag";
  const mockTestId = "info-template";

  it("renders InfoTemplate component with BannerImage and InfoItems", () => {
    const { getByTestId, getAllByTestId } = render(
      <InfoTemplate
        data={mockData}
        image={mockImage}
        imageTag={mockImageTag}
        testId={mockTestId}
      />
    );

    const bannerImage = getByTestId(`${mockTestId}-header-component`);
    expect(bannerImage).toBeDefined();

    const infoItems = getAllByTestId(`${mockTestId}-item`);
    expect(infoItems.length).toBe(mockData.length);

    infoItems.forEach((infoItem, index) => {
      expect(infoItem).toBeDefined();
    });
  });
});
