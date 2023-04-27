import { Text, View } from "react-native";
import { styles } from "./Styles";
import { Button } from "../../Elemente/Button";
import { useCatchMeContext } from "./CatchMeContext";

export const GameInstructions = () => {
  const ctx = useCatchMeContext();

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Welcome to "Catch Me If You Can". In this game you try to tap the target
        field as fast as possible. The field jumps to a new position after each click.
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
        textStyle={styles.buttonText}
      />
    </View>
  );
};
