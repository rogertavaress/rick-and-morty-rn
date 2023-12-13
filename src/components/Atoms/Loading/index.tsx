import React from "react";
import { ActivityIndicator } from "react-native";

import { LoadingProps } from "./Loading.types";

export const Loading = ({ loading, testId }: LoadingProps) => {
  return loading && <ActivityIndicator size="large" testID={testId} />;
};
