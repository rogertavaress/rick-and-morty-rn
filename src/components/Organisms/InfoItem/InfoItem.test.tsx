import React from "react";
import { Text } from "react-native";
import { render } from "@testing-library/react-native";
import { InfoItem } from ".";

describe("<InfoItem />", () => {
  const mockProps = {
    IconType: Text,
    icon: "icon-name",
    title: "Subtitle",
    value: "Value",
  };

  it("renders InfoItem component with title, and value", () => {
    const { getByText } = render(<InfoItem {...mockProps} />);

    const subtitle = getByText(mockProps.title);
    expect(subtitle).toBeDefined();

    const value = getByText(mockProps.value);
    expect(value).toBeDefined();
  });
});
