import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { AnimatedItemProps } from "./AnimatedItem.types";

export const AnimatedItem = ({
  children,
  testId,
  onAnimationFinish,
  awaiting = 0,
}: AnimatedItemProps) => {
  const translateY = useSharedValue(-300);
  const opacity = useSharedValue(0);

  useEffect(() => {
    setTimeout(() => {
      translateY.value = withSpring(0, { damping: 10 });
      opacity.value = withTiming(1);
      onAnimationFinish?.();
    }, awaiting * 20);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View testID={testId} style={animatedStyle}>
      {children}
    </Animated.View>
  );
};
