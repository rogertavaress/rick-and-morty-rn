import { useLayoutEffect } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

import { MainStackParamList } from "../../../navigation/MainStack/MainStack.types";
import { MainStackEnum } from "../../../navigation/MainStack/MainStack.enum";

import { useFavorite } from "../../../contexts/Favorite";

import { FavoriteButton } from "../../../components/Molecules";

export const useDetails = () => {
  const { addFavorite, getFavorite, removeFavorite, list } = useFavorite();
  const {
    params: { character, tag },
  } = useRoute<RouteProp<MainStackParamList, MainStackEnum.DETAILS>>();
  const { setOptions } = useNavigation();

  const data = [
    {
      title: "Gender",
      value: character.gender,
      icon: character.gender === "Male" ? "gender-male" : "gender-female",
      IconType: MaterialCommunityIcons,
    },
    {
      title: "Status",
      value: character.status,
      icon: "cards-heart",
      IconType: MaterialCommunityIcons,
    },
    {
      title: "Location",
      value: character.location.name,
      icon: "location",
      IconType: Ionicons,
    },
    {
      title: "Origin",
      value: character.origin.name,
      icon: "child-friendly",
      IconType: MaterialIcons,
    },
    {
      title: "Specie",
      value: character.species,
      icon: "alien-outline",
      IconType: MaterialCommunityIcons,
    },
  ];

  useLayoutEffect(() => {
    setOptions({
      title: character.name,
      headerRight: () => (
        <FavoriteButton
          isFill={!!getFavorite(character.id)}
          onPress={
            getFavorite(character.id)
              ? () => removeFavorite(character.id)
              : () => addFavorite(character)
          }
        />
      ),
    });
  }, [list]);

  return { data, tag, image: character.image };
};
