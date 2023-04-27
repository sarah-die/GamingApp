import { Text, View } from "react-native";
import { styles } from "./Styles";
import { Button } from "../../Elemente/Button";
import { useCatchMeContext } from "./CatchMeContext";

export const GameInstructions = () => {
  const ctx = useCatchMeContext();

  return (
    <View>
      <Text style={styles.textStyle}>
        Welcome to "Catch Me If You Can". In this game you try to tap the target
        field, which jumps to a new point after each click, as fast as you can.
      </Text>
      <Text style={styles.textStyle}>
        This game is made for one player. But you can try to break each other's
        record.
      </Text>
      <Text style={styles.textStyle}>
        Click the button whenever you're ready. Have fun!
      </Text>
      <Button
        title={"Let's Start"}
        onPress={() => ctx.setGameStatus("ingame")}
        style={styles.button}
        textStyle={{ fontSize: 15 }}
      />
    </View>
  );
};
