import React from "react";
import { render } from "@testing-library/react-native";
import { SectionTitle } from ".";

describe("<SectionTitle />", () => {
  const mockProps = {
    title: "Title",
    visible: true,
  };

  it("renders SectionTitle component when visible is true", () => {
    const { getByText } = render(<SectionTitle {...mockProps} />);

    const sectionTitleText = getByText(mockProps.title);
    expect(sectionTitleText).toBeDefined();
  });

  it("does not render SectionTitle component when visible is false", () => {
    const { queryByText } = render(
      <SectionTitle {...mockProps} visible={false} />
    );

    const sectionTitleText = queryByText(mockProps.title);
    expect(sectionTitleText).toBeNull();
  });
});
