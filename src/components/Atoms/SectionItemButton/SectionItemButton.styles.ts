import { TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const SectionItemButtonContainer = styled(
  Animated.createAnimatedComponent(TouchableOpacity)
)`
  padding: 10px 20px;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
`;
