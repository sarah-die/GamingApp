import * as React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation";
import { Button } from "../Elemente/Button";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.images}
            source={require("./images/ticTacToe.jpeg")}
          ></Image>
        </View>
        <Button
          title="Play Tic Tac Toe"
          onPress={() => navigation.navigate("TicTacToeScreen")}
          style={styles.button}
          textStyle={styles.buttonText}
        />
        <View style={styles.imageContainer}>
          <Image
            style={styles.images}
            source={require("./images/clickMe.jpg")}
          ></Image>
        </View>
        <Button
          title="Play Click Me"
          onPress={() => navigation.navigate("ClickMeScreen")}
          style={styles.button}
          textStyle={styles.buttonText}
        />
        <View style={styles.imageContainer}>
          <Image
            style={styles.images}
            source={require("./images/connect-4.jpg")}
          ></Image>
        </View>
        <Button
          title="Play Connect Four"
          onPress={() => navigation.navigate("ConnectFourScreen")}
          style={styles.button}
          textStyle={styles.buttonText}
        />
        <View style={styles.imageContainer}>
          <Image
            style={styles.images}
            source={require("./images/conways.png")}
          ></Image>
        </View>
        <Button
          title={"Play Conways Game of Life"}
          onPress={() => navigation.navigate("ConwaysScreen")}
          style={styles.button}
          textStyle={styles.buttonText}
        ></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    width: "100%",
    backgroundColor: "#e2e2e5",
  },
  button: {
    margin: 10,
    backgroundColor: "#d5d5e7",
    borderColor: "#181e5d",
    width: 240,
    alignSelf: "center",
  },
  buttonText: {
    color: "#181e5d",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  images: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  imageContainer: {
    padding: 10,
    //paddingHorizontal: 90,
    width: "50%",
    alignSelf: "center",
  },
});
