import React from "react";
import { Text } from "react-native";
import { render, waitFor } from "@testing-library/react-native";
import { AnimatedItem } from ".";

describe("<AnimatedItem />", () => {
  it("renders children with animations and calls onAnimationFinish", async () => {
    jest.useFakeTimers();

    const onAnimationFinishMock = jest.fn();

    const { getByTestId } = render(
      <AnimatedItem
        testId="animated-item-test"
        awaiting={1}
        onAnimationFinish={onAnimationFinishMock}
      >
        <Text>Animated Content</Text>
      </AnimatedItem>
    );

    const animatedItem = getByTestId("animated-item-test");
    const animatedStyle = animatedItem.props.style;

    expect(animatedStyle).toEqual({
      opacity: 0,
      transform: [{ translateY: -300 }],
    });

    jest.advanceTimersByTime(2000);

    await waitFor(() => {
      expect(onAnimationFinishMock).toHaveBeenCalled();
    });
  });
});
