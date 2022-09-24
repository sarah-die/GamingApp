import { RootStackParamList } from "../Navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ConwaysGameField } from "../Games/ConwaysGameOfLife/ConwaysGameField";

type ConwaysProps = NativeStackScreenProps<RootStackParamList, "ConwaysScreen">;

export const ConwaysScreen = ({ navigation }: ConwaysProps) => {
  return <ConwaysGameField />;
};
