import * as React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation";
import {ConnectFour} from "../Games/ConnectFour";


type ConnectFourProps = NativeStackScreenProps<
    RootStackParamList,
    "ConnectFourScreen"
    >;

export const ConnectFourScreen = ({ navigation }: ConnectFourProps) => {
    return <ConnectFour/>;
};