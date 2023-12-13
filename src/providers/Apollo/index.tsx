import React, { PropsWithChildren } from "react";
import { ApolloProvider as ApolloProviderLib } from "@apollo/client";

import { apolloClient } from "../../config/apolloClient";

export const ApolloProvider = ({ children }: PropsWithChildren) => {
  return (
    <ApolloProviderLib client={apolloClient}>{children}</ApolloProviderLib>
  );
};
