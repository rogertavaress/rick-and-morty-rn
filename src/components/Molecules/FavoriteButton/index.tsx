import React from "react";
import { TouchableOpacity } from "react-native";

import { StarIcon } from "../../Atoms";

import { FavoriteButtonProps } from "./FavoriteButton.types";

export const FavoriteButton = ({
  onPress,
  isFill,
  testId,
}: FavoriteButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} testID={testId}>
      <StarIcon isFill={isFill} />
    </TouchableOpacity>
  );
};
