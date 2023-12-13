import React from "react";
import Animated from "react-native-reanimated";

import { ProfileImageProps } from "./ProfileImage.types";

export const ProfileImage = ({ tag, image, testId }: ProfileImageProps) => {
  return (
    <Animated.Image
      testID={testId}
      sharedTransitionTag={tag}
      source={{ uri: image }}
      style={{ height: 50, width: 50, borderRadius: 25 }}
    />
  );
};
