import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "./Elemente/Button";
import { useState } from "react";
import {ClickMe} from "./Games/ClickMe";
import {TicTacToe} from "./Games/TicTacToe";


// noinspection JSUnusedGlobalSymbols
export default function App() {
  return(
      <TicTacToe/>
  )
}
