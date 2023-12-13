import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { FavoriteButton } from ".";

describe("<FavoriteButton />", () => {
  const mockProps = {
    onPress: jest.fn(),
    isFill: false,
  };

  it("renders FavoriteButton component with StarIcon inside TouchableOpacity", () => {
    const { getByTestId } = render(
      <FavoriteButton {...mockProps} testId="favorite-button" />
    );

    const touchableOpacity = getByTestId("favorite-button");
    expect(touchableOpacity).toBeDefined();

    fireEvent.press(touchableOpacity);

    expect(mockProps.onPress).toHaveBeenCalled();
  });
});
