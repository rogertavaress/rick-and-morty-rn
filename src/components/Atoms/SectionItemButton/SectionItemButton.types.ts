import { WithTestId } from "../../../types/Test.types";

export type SectionItemButtonProps = WithTestId & {
  children: any;
  onPress: () => void;
};
