import React from "react";

import { InfoTemplate } from "../../templates";

import { useDetails } from "./hooks/useDetails";

export const DetailsScreen = () => {
  const { data, tag, image } = useDetails();

  return <InfoTemplate data={data} image={image} imageTag={tag} />;
};
