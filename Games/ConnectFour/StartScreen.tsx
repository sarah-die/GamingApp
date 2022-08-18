import { Text, TouchableOpacity, View } from "react-native";
import { TriangleColorPicker } from "react-native-color-picker";
import { Button } from "../../Elemente/Button";
import { Token } from "../Token";
import { ColorPickerStatus, Status } from "../ConnectFour";
import { styles } from "./Styles";

const pickColor = () => {};


export const StartScreen = (props: {
  setStatusX: (status: Status) => void;
  setColorPickerX: (colorPickerStatus: ColorPickerStatus) => void;
  colorPickerStatusX: ColorPickerStatus;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Both of you: Please choose a color by clicking on your token.
      </Text>

      <View style={styles.colorPickerOuter}>
        {props.colorPickerStatusX === "on" ? (
          <View
            style={{
              flex: 1,
              padding: 10,
              backgroundColor: "#323538",
              height: 250,
              borderColor: "#323538",
            }}
          >
            <TriangleColorPicker
              oldColor="purple"
              onColorSelected={(color) => alert(`Color selected: ${color}`)}
              style={{ flex: 1 }}
            />
            <Button
              title={"Choose Color"}
              onPress={pickColor}
              style={styles.generalButton}
              textStyle={styles.buttonText}
            />
          </View>
        ) : (
          <>
            <TouchableOpacity
              style={styles.colorPickerInner}
              onPress={() => props.setColorPickerX("on")}
            >
              <Token color={"black"} size={50} />
              <Text style={styles.textStyle}>Player 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.colorPickerInner}
              onPress={() => props.setColorPickerX("on")}
            >
              <Token color={"white"} size={50} />
              <Text style={styles.textStyle}>Player 2</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <Text style={styles.textStyle}>
        If you're ready. Click the button to start the game.
      </Text>
      <Button
        title={"Start Game"}
        onPress={() => props.setStatusX("play")}
        style={styles.generalButton}
        textStyle={styles.buttonText}
      ></Button>
    </View>
  );
};
