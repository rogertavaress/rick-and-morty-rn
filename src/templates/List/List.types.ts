import { Character } from "../../types/Api.types";
import { WithTestId } from "../../types/Test.types";

export type ListTemplateProps = WithTestId & {
  sections: {
    title: string;
    data: Character[];
  }[];
  handleLoadMore: () => void;
  loading: boolean;
  onPress: (item: Character, sectionTitle: string) => void;
  onPressFavorite: (item: Character) => void;
  favoriteList: { [key: string]: Character };
};
