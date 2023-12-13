import { MainStackParamList } from "../Navigation/MainStack/MainStack.types";

type RootStackParamList = MainStackParamList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
