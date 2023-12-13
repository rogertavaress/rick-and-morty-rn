import { Character } from "../../types/Api.types";
import { MainStackEnum } from "./MainStack.enum";

export type MainStackParamList = {
  [MainStackEnum.HOME]: undefined;
  [MainStackEnum.DETAILS]: { character: Character; tag: string };
};
