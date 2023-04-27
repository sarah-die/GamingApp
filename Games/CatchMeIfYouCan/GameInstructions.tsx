import { Text, View } from "react-native";
import { styles } from "./Styles";
import { Button } from "../../Elemente/Button";
import { useCatchMeContext } from "./CatchMeContext";
import Slider from "@react-native-community/slider";

export const GameInstructions = () => {
  const ctx = useCatchMeContext();

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Welcome to "Catch Me If You Can". In this game you try to tap the target
        field as fast as possible. The field jumps to a new position after each
        click.
      </Text>
      <Text style={styles.textStyle}>
        You can set here how often you want to click. The number should be
        between 5 and 50.
      </Text>
      <View>
        <Slider
          value={ctx.numberOfClicks}
          style={{ width: 300, height: 40 }}
          minimumValue={5}
          maximumValue={50}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#181e5d"
          onSlidingComplete={(selectedNumber) => {
            ctx.setNumberOfClicks(selectedNumber);
          }}
          step={1}
        ></Slider>
      </View>
      <Text style={styles.textStyle}>
        Number of Clicks: {ctx.numberOfClicks}
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
