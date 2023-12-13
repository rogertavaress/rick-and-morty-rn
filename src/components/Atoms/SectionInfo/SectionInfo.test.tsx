import React from "react";
import { render } from "@testing-library/react-native";
import { SectionInfo } from ".";
import { SectionInfoProps } from "./SectionInfo.types";

describe("<SectionInfo />", () => {
  const mockProps = {
    type: "title",
    value: "This is a section title.",
  } as SectionInfoProps;

  it("renders SectionInfo component with correct props", () => {
    const { getByText } = render(<SectionInfo {...mockProps} />);

    const sectionInfoText = getByText(mockProps.value);
    expect(sectionInfoText).toBeDefined();

    expect(sectionInfoText.props.type).toBe(mockProps.type);
  });
});
