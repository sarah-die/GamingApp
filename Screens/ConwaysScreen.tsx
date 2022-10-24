import { RootStackParamList } from "../Navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ConwaysGameFieldScreen } from "../Games/ConwaysGameOfLife/ConwaysGameFieldScreen";

type ConwaysProps = NativeStackScreenProps<RootStackParamList, "ConwaysScreen">;

export const ConwaysScreen = ({ navigation }: ConwaysProps) => {
  return <ConwaysGameFieldScreen />;
};
