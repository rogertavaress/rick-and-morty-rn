import { WithTestId } from "../../types/Test.types";

export type InfoTemplateProps = WithTestId & {
  imageTag: string;
  image: string;
  data: {
    title: string;
    value: string;
    icon: string;
    IconType: any;
  }[];
};
