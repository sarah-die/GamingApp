import * as React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation";
import { CatchMeIfYouCan } from "../Games/CatchMeIfYouCan/CatchMeIfYouCan";

type CatchMeIfYouCanScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "CatchMeIfYouCanScreen"
>;

export const CatchMeIfYouCanScreen = ({ navigation }: CatchMeIfYouCanScreenProps) => {
  return <CatchMeIfYouCan />;
};
