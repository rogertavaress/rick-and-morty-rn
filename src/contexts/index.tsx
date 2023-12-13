import React from "react";
import { FavoriteProvider } from "./Favorite";

export const Contexts = ({ children }: React.PropsWithChildren) => {
  return <FavoriteProvider>{children}</FavoriteProvider>;
};
