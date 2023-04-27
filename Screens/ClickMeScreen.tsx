import * as React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation";
import { CatchMeIfYouCan } from "../Games/CatchMeIfYouCan/CatchMeIfYouCan";

type ClickMeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ClickMeScreen"
>;

export const ClickMeScreen = ({ navigation }: ClickMeScreenProps) => {
  return <CatchMeIfYouCan />;
};
