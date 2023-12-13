import React from "react";
import { render } from "@testing-library/react-native";
import { ProfileImage } from ".";

describe("<ProfileImage />", () => {
  const mockImage = "https://example.com/image.jpg";
  const mockTag = "imageTag";

  it("renders BannerImage component with correct props", () => {
    const { getByTestId } = render(
      <ProfileImage tag={mockTag} image={mockImage} testId="banner-image" />
    );

    const renderedImage = getByTestId("banner-image");
    expect(renderedImage.props.source.uri).toBe(mockImage);

    expect(renderedImage.props.style.height).toBe(50);
    expect(renderedImage.props.style.width).toBe(50);
    expect(renderedImage.props.style.borderRadius).toBe(25);
  });

  it("passes the sharedTransitionTag prop correctly", () => {
    const { getByTestId } = render(
      <ProfileImage tag={mockTag} image={mockImage} testId="banner-image" />
    );

    const renderedImage = getByTestId("banner-image");
    expect(renderedImage.props.sharedTransitionTag).toBe(mockTag);
  });
});
