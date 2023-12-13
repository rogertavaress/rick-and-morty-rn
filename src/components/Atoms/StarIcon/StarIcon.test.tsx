import React from "react";
import { render } from "@testing-library/react-native";
import { StarIcon } from ".";

jest.mock("@expo/vector-icons/MaterialCommunityIcons", () => "Icon");

describe("<StarIcon />", () => {
  it("renders StarIcon component as filled star when isFill is true", () => {
    const { getByTestId } = render(
      <StarIcon isFill={true} testId="star-icon" />
    );

    const filledStarIcon = getByTestId("star-icon");
    expect(filledStarIcon.props.name).toBe("star");
    expect(filledStarIcon.props.color).toBe("gold");
    expect(filledStarIcon.props.size).toBe(30);
  });

  it("renders StarIcon component as outlined star when isFill is false", () => {
    const { getByTestId } = render(
      <StarIcon isFill={false} testId="star-icon" />
    );

    const outlinedStarIcon = getByTestId("star-icon");
    expect(outlinedStarIcon.props.name).toBe("star-outline");
    expect(outlinedStarIcon.props.color).toBe("gold");
    expect(outlinedStarIcon.props.size).toBe(30);
  });
});
