import { PropsWithChildren } from "react";
import { WithTestId } from "../../../types/Test.types";

export type AnimatedItemProps = WithTestId &
  PropsWithChildren<{
    onAnimationFinish?: () => void;
    awaiting?: number;
  }>;
