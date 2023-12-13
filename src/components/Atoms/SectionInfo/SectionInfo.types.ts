import { WithTestId } from "../../../types/Test.types";

export type SectionInfoTextProps = {
  type: "title" | "subtitle";
};

export type SectionInfoProps = WithTestId &
  SectionInfoTextProps & {
    value: string;
  };
