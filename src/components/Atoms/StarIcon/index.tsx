import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { StarIconProps } from "./StarIcon.types";

export const StarIcon = ({ isFill, testId }: StarIconProps) => {
  return (
    <MaterialCommunityIcons
      testID={testId}
      name={isFill ? "star" : "star-outline"}
      color="gold"
      size={30}
    />
  );
};
