import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./Screens/HomeScreen";
import { TicTacToeScreen } from "./Screens/TicTacToeScreen";
import { ClickMeScreen } from "./Screens/ClickMeScreen";
import { ConnectFourScreen } from "./Screens/ConnectFourScreen";
import { ConwaysScreen } from "./Screens/ConwaysScreen";

export type RootStackParamList = {
  HomeScreen: undefined;
  TicTacToeScreen: undefined;
  ClickMeScreen: undefined;
  ConnectFourScreen: undefined;
  ConwaysScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Let's play some games" }}
        />
        <Stack.Screen
          name="TicTacToeScreen"
          component={TicTacToeScreen}
          options={{ title: "Tic Tac Toe" }}
        />
        <Stack.Screen
          name="ClickMeScreen"
          component={ClickMeScreen}
          options={{ title: "Click Me" }}
        />
        <Stack.Screen
          name="ConnectFourScreen"
          component={ConnectFourScreen}
          options={{ title: "Connect Four" }}
        />
        <Stack.Screen
          name="ConwaysScreen"
          component={ConwaysScreen}
          options={{ title: "Conways Game of Life" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
