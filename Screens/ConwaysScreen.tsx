import { RootStackParamList } from "../Navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ConwaysGameOfLife } from "../Games/ConwaysGameOfLife/ConwaysGameOfLife";

type ConwaysProps = NativeStackScreenProps<RootStackParamList, "ConwaysScreen">;

export const ConwaysScreen = ({ navigation }: ConwaysProps) => {
  return <ConwaysGameOfLife />;
};
