import { WithTestId } from "../../../types/Test.types";

export type SectionItemProps = WithTestId & {
  id: string;
  image: string;
  isFavorite: boolean;
  onFavoriteChange?: () => void;
  onPress?: () => void;
  sectionTitle: string;
  subtitle: string;
  title: string;
};
