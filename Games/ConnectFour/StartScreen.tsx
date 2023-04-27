import { Text, TouchableOpacity, View } from "react-native";
import { fromHsv, TriangleColorPicker } from "react-native-color-picker";
import { Button } from "../../Elemente/Button";
import { Token } from "../../Elemente/Token";
import { styles } from "./Styles";
import { useConnectFourContext } from "./ConnectFourContext";

/** The startscreen allows the two players to choose the color of their token before they start the game. **/

export const StartScreen = () => {
  const ctx = useConnectFourContext();
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Both of you: Please choose a color by clicking on your token.
      </Text>

      <View style={styles.colorPickerOuter}>
        {["onA", "onB"].includes(ctx.colorPickerStatus) ? (
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
              color={ctx.colorPickerStatus === "onA" ? ctx.colorA : ctx.colorB}
              onColorChange={(color) => {
                const fn =
                  ctx.colorPickerStatus === "onA"
                    ? ctx.setColorA
                    : ctx.setColorB;
                fn(fromHsv(color));
              }}
              style={{ flex: 1 }}
            />
            <Button
              title={"Choose Color"}
              onPress={() => ctx.setColorPickerStatus("off")}
              style={styles.generalButton}
              textStyle={{ fontSize: 15 }}
            />
          </View>
        ) : (
          <>
            <TouchableOpacity
              style={styles.colorPickerInner}
              onPress={() => ctx.setColorPickerStatus("onA")}
            >
              <Token color={ctx.colorA} size={50} />
              <Text style={{ ...styles.textStyle, textAlign: "center" }}>Player A</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.colorPickerInner}
              onPress={() => ctx.setColorPickerStatus("onB")}
            >
              <Token color={ctx.colorB} size={50} />
              <Text style={{ ...styles.textStyle, textAlign: "center" }}>Player B</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <Text style={styles.textStyle}>
        If you're ready. Click the button to start the game. Just follow the
        instructions given to you during the game.
      </Text>
      <Button
        title={"Start Game"}
        onPress={() => ctx.setStatus("play")}
        style={styles.generalButton}
        textStyle={styles.buttonText}
      ></Button>
    </View>
  );
};
