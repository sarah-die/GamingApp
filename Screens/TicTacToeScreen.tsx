import * as React from "react";
import { Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation";
import { TicTacToe } from "../Games/TicTacToe";

type TicTacToeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "TicTacToeScreen"
>;

export const TicTacToeScreen = ({ navigation }: TicTacToeScreenProps) => {
  return <TicTacToe />;
};
