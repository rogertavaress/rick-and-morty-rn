import React from "react";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";

import { BannerImageProps } from "./BannerImage.types";

const { width } = Dimensions.get("window");

export const BannerImage = ({ tag, image, testId }: BannerImageProps) => {
  return (
    <Animated.Image
      testID={testId}
      sharedTransitionTag={tag}
      style={{
        height: 300,
        width,
      }}
      source={{
        uri: image,
      }}
    />
  );
};
