import { StarIconProps } from "../../Atoms/StarIcon/StarIcon.types";

export type FavoriteButtonProps = StarIconProps & {
  onPress?: () => void;
};
