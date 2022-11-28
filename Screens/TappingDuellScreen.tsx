import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation";
import {GameField} from "../Games/TheTappingDuell/GameField";

type TappingDuellProps = NativeStackScreenProps<RootStackParamList, "TappingDuellScreen">;

export const TappingDuellScreen = ({ navigation }: TappingDuellProps) => {
  return <GameField />;
};