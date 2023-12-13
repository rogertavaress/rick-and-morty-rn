import React from "react";
import { Text } from "react-native";
import { render, fireEvent } from "@testing-library/react-native";
import { SectionItemButton } from ".";

describe("<SectionItemButton />", () => {
  const mockOnPress = jest.fn();

  it("renders SectionItemButton component with children and onPress handler", () => {
    const { getByTestId } = render(
      <SectionItemButton onPress={mockOnPress}>
        <Text testID="button-text">Click Me</Text>
      </SectionItemButton>
    );

    const button = getByTestId("button-text");
    expect(button).toBeDefined();

    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
