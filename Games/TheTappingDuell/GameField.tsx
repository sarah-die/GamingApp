import React, { useState } from "react";
import { styles, windowHeight } from "./Styles";
import { Text, TouchableOpacity, View } from "react-native";
import { Button } from "../../Elemente/Button";

export type GameStatus = "NewGame" | "InGame" | "GameEnd";
const diff: number = 15;

export const GameField = () => {
  const [heightA, setHeightA] = useState<number>(windowHeight / 2);
  const [heightB, setHeightB] = useState<number>(windowHeight / 2);
  const [gameStatus, setGameStatus] = useState<GameStatus>("NewGame");
  const [winner, setWinner] = useState<string>("");

  const checkFieldSize = (
    sizeA: number,
    sizeB: number
  ): "A" | "B" | undefined => {
    if (sizeA <= 0) {
      setWinner("blue");
      setGameStatus("GameEnd");
      setHeightA(windowHeight / 2);
      setHeightB(windowHeight / 2);
      return "B";
    } else if (sizeB <= 0) {
      setWinner("purple");
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
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            Game for two players: Both click on your field as fast as possible.
            Every click makes your field bigger, while the opponent's field
            shrinks. The player whose field takes up the screen first is the
            winner. Have fun!
          </Text>
          <Text style={{ ...styles.textStyle, fontSize: 15, paddingTop: 5 }}>
            Psst: Make sure to only click on your color - especially if your field
            shrinks.
          </Text>
          <Button
            style={styles.generalButton}
            textStyle={styles.buttonText}
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
              backgroundColor: "#655392",
            }}
            onPress={refreshField("A")}
          ></TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1.0}
            style={{
              ...styles.playerTouchable,
              height: heightB,
              backgroundColor: "#133972",
            }}
            onPress={refreshField("B")}
          ></TouchableOpacity>
        </View>
      )}
      {gameStatus === "GameEnd" && (
        <View style={styles.container}>
          <Text style={styles.textStyle}>Congrats to {winner} player!</Text>
          <Button
            style={styles.generalButton}
            textStyle={styles.buttonText}
            title={"Restart Game"}
            onPress={() => setGameStatus("NewGame")}
          ></Button>
        </View>
      )}
    </>
  );
};
