import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Providers } from "./providers";
import { Contexts } from "./contexts";
import { Navigation } from "./navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Providers>
          <Contexts>
            <Navigation />
          </Contexts>
        </Providers>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
