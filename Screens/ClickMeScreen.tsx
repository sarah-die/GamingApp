import * as React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation";
import { ClickMe } from "../Games/ClickMe";

type ClickMeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ClickMeScreen"
>;

export const ClickMeScreen = ({ navigation }: ClickMeScreenProps) => {
  return <ClickMe />;
};
