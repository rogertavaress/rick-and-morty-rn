import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DetailsScreen, HomeScreen } from "../../screens";

import { HomeHeader } from "../../screens/Home/Home.header";
import { DetailsHeader } from "../../screens/Details/Details.header";

import { MainStackEnum } from "./MainStack.enum";

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={MainStackEnum.HOME}>
      <Stack.Screen
        options={HomeHeader}
        name={MainStackEnum.HOME}
        component={HomeScreen}
      />
      <Stack.Screen
        options={DetailsHeader}
        name={MainStackEnum.DETAILS}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
};
