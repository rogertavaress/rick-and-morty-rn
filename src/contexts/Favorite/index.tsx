import React, { createContext, useCallback, useContext, useState } from "react";

import { Character } from "../../types/Api.types";

type FavoriteContextData = {
  list: { [id: string]: Character };
  addFavorite: (item: Character) => void;
  removeFavorite: (id: string) => void;
  getFavorite: (id: string) => Character | undefined;
};

const FavoriteContext = createContext<FavoriteContextData>(
  {} as FavoriteContextData
);

export const FavoriteProvider = ({ children }) => {
  const [list, setList] = useState<{ [id: string]: Character }>({});

  const getFavorite = useCallback(
    (id: string): Character | undefined => {
      return list[id];
    },
    [list]
  );

  const addFavorite = useCallback((item: Character) => {
    setList((oldList) => ({ ...oldList, [item.id]: item }));
  }, []);

  const removeFavorite = useCallback((id: string) => {
    setList((oldList) => {
      const newList = oldList;
      delete newList[id];
      return { ...newList };
    });
  }, []);

  return (
    <FavoriteContext.Provider
      value={{ list, addFavorite, removeFavorite, getFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = (): FavoriteContextData => {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error("useFavorite must be used within a FavoriteProvider");
  }

  return context;
};
