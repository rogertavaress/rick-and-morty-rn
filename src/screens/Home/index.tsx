import React, { useCallback, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";

import { ListTemplate } from "../../templates";

import { useFavorite } from "../../contexts/Favorite";

import { MainStackEnum } from "../../navigation/MainStack/MainStack.enum";

import { useCharacters } from "./hooks/useCharacters";
import { Character } from "../../types/Api.types";

export const HomeScreen = () => {
  const { navigate } = useNavigation();
  const {
    characters: characterList,
    handleLoadMore,
    loading,
  } = useCharacters();
  const {
    list: favoriteList,
    addFavorite,
    removeFavorite,
    getFavorite,
  } = useFavorite();

  const characters = useMemo(
    () => ({
      title: "Characters",
      data: characterList,
    }),
    [characterList]
  );

  const favorites = useMemo(
    () => ({
      title: "Favorites",
      data: Object.values(favoriteList),
    }),
    [favoriteList]
  );

  const handlePressFavorite = useCallback(
    (item: Character) => {
      if (getFavorite(item.id)) {
        removeFavorite(item.id);
      } else {
        addFavorite(item);
      }
    },
    [getFavorite, removeFavorite, addFavorite]
  );

  return (
    <ListTemplate
      sections={[favorites, characters]}
      favoriteList={favoriteList}
      handleLoadMore={handleLoadMore}
      loading={loading}
      onPress={(item, section) =>
        navigate(MainStackEnum.DETAILS, {
          character: item,
          tag: `${item.id}-${section}-tag`,
        })
      }
      onPressFavorite={handlePressFavorite}
    />
  );
};
