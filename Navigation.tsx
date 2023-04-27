import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./Screens/HomeScreen";
import { TicTacToeScreen } from "./Screens/TicTacToeScreen";
import { CatchMeIfYouCanScreen } from "./Screens/CatchMeIfYouCanScreen";
import { ConnectFourScreen } from "./Screens/ConnectFourScreen";
import { ConwaysScreen } from "./Screens/ConwaysScreen";
import { TappingDuellScreen } from "./Screens/TappingDuellScreen";

export type RootStackParamList = {
  HomeScreen: undefined;
  TicTacToeScreen: undefined;
  CatchMeIfYouCanScreen: undefined;
  ConnectFourScreen: undefined;
  ConwaysScreen: undefined;
  TappingDuellScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Games for two players" }}
        />
        <Stack.Screen
          name="TicTacToeScreen"
          component={TicTacToeScreen}
          options={{ title: "Tic Tac Toe" }}
        />
        <Stack.Screen
          name="ConnectFourScreen"
          component={ConnectFourScreen}
          options={{ title: "Connect Four" }}
        />
        <Stack.Screen
          name="CatchMeIfYouCanScreen"
          component={CatchMeIfYouCanScreen}
          options={{ title: "Catch Me If You Can" }}
        />
        {/*<Stack.Screen*/}
        {/*  name="ConwaysScreen"*/}
        {/*  component={ConwaysScreen}*/}
        {/*  options={{ title: "Conways Game of Life" }}*/}
        {/*/>*/}
        <Stack.Screen
          name="TappingDuellScreen"
          component={TappingDuellScreen}
          options={{ title: "The Tapping Duell" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
