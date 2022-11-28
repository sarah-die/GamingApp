import React, { useState } from "react";
import { styles, windowHeight } from "./Styles";
import { Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Button } from "../../Elemente/Button";

export type GameStatus = "NewGame" | "InGame" | "GameEnd";
const diff: number = 10;

export const GameField = () => {
  const [heightA, setHeightA] = useState<number>(windowHeight / 2);
  const [heightB, setHeightB] = useState<number>(windowHeight / 2);
  const [gameStatus, setGameStatus] = useState<GameStatus>("NewGame");

  const checkFieldSize = (
    sizeA: number,
    sizeB: number
  ): "A" | "B" | undefined => {
    if (sizeA <= 0) {
      setGameStatus("GameEnd");
      setHeightA(windowHeight / 2);
      setHeightB(windowHeight / 2);
      return "B";
    } else if (sizeB <= 0) {
      setGameStatus("GameEnd");
      setHeightA(windowHeight / 2);
      setHeightB(windowHeight / 2);
      return "A";
    }
    return undefined;
  };

  const refreshField = (index: string) => () => {
    if (index === "A") {
      setHeightA(heightA + diff);
      setHeightB(heightB - diff);
    } else {
      setHeightA(heightA - diff);
      setHeightB(heightB + diff);
    }
    checkFieldSize(heightA, heightB);
  };

  return (
    <>
      {gameStatus === "NewGame" && (
        <View style={styles.outerGamefield}>
          <Text>
            Spiel für zwei Spieler: Klickt beide so schnell es geht euer Feld
            an. Dadurch vergrößert sich dieses, während das Feld der Gegners
            schrumpft. Der Spieler, dessen Feld zuerst den Bildschirm einnimmt
            hat gewonnen. Viel Spaß!
          </Text>
          <Button
            title={"Press to Start"}
            onPress={() => setGameStatus("InGame")}
          ></Button>
        </View>
      )}
      {gameStatus === "InGame" && (
        <View style={styles.outerGamefield}>
          <TouchableOpacity
            activeOpacity={1.0}
            style={{
              ...styles.playerTouchable,
              height: heightA,
              backgroundColor: "#649253",
            }}
            onPress={refreshField("A")}
          ></TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1.0}
            style={{
              ...styles.playerTouchable,
              height: heightB,
              backgroundColor: "#1ebcda",
            }}
            onPress={refreshField("B")}
          ></TouchableOpacity>
        </View>
      )}
      {gameStatus === "GameEnd" && (
        <View style={styles.outerGamefield}>
          <Text>Congrats!</Text>
          <Button
            title={"Restart Game"}
            onPress={() => setGameStatus("NewGame")}
          ></Button>
        </View>
      )}
    </>
  );
};
