import { useMemo, useState } from "react";
import { NetworkStatus, useQuery } from "@apollo/client";
import { GET_CHARACTERS_LIST } from "../graphql/GET_CHARACTERS_LIST";
import { Info, Character } from "../../../types/Api.types";

export const useCharacters = () => {
  const { data, loading, fetchMore } = useQuery<{
    characters: { results: Character[]; info: Info };
  }>(GET_CHARACTERS_LIST, {
    fetchPolicy: "network-only",
  });

  const characters = data?.characters.results ?? [];

  const handleLoadMore = () => {
    if (!data || loading) return;

    const {
      characters: {
        info: { next },
      },
    } = data;

    if (!next) return;

    fetchMore({
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        const { characters } = fetchMoreResult;
        const { results } = characters;

        return {
          characters: {
            ...characters,
            results: [...prev.characters.results, ...results],
          },
        };
      },
      variables: {
        page: next,
      },
    });
  };

  return {
    handleLoadMore,
    loading,
    characters,
  };
};
