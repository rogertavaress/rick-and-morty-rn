import React from "react";
import { ApolloProvider } from "./Apollo";

export const Providers = ({ children }: React.PropsWithChildren) => {
  return <ApolloProvider>{children}</ApolloProvider>;
};
