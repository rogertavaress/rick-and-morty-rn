import React from "react";
import { render } from "@testing-library/react-native";
import { Loading } from ".";

describe("<Loading />", () => {
  it("renders ActivityIndicator when loading is true", () => {
    const { getByTestId } = render(
      <Loading loading={true} testId="activity-indicator" />
    );

    const activityIndicator = getByTestId("activity-indicator");
    expect(activityIndicator).toBeDefined();

    expect(activityIndicator.props.size).toBe("large");
  });

  it("does not render ActivityIndicator when loading is false", () => {
    const { queryByTestId } = render(
      <Loading loading={false} testId="activity-indicator" />
    );

    const activityIndicator = queryByTestId("activity-indicator");
    expect(activityIndicator).toBeNull();
  });
});
