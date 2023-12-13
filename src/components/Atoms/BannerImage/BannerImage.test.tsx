import React from "react";
import { Dimensions } from "react-native";
import { render } from "@testing-library/react-native";
import { BannerImage } from ".";

describe("<BannerImage />", () => {
  const mockImage = "https://example.com/image.jpg";
  const mockTag = "imageTag";

  it("renders BannerImage component with correct props", () => {
    const { getByTestId } = render(
      <BannerImage tag={mockTag} image={mockImage} testId="banner-image" />
    );

    const renderedImage = getByTestId("banner-image");
    expect(renderedImage.props.source.uri).toBe(mockImage);

    expect(renderedImage.props.style.height).toBe(300);
    expect(renderedImage.props.style.width).toBe(
      Dimensions.get("window").width
    );
  });

  it("passes the sharedTransitionTag prop correctly", () => {
    const { getByTestId } = render(
      <BannerImage tag={mockTag} image={mockImage} testId="banner-image" />
    );

    const renderedImage = getByTestId("banner-image");
    expect(renderedImage.props.sharedTransitionTag).toBe(mockTag);
  });
});
