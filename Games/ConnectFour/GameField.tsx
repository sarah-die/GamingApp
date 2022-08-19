import { Text, TouchableOpacity, View } from "react-native";
import { Button } from "../../Elemente/Button";
import { styles } from "./Styles";
import { Status } from "./ConnectFour";
import { useConnectFourContext } from "./ConnectFourContext";

const placeToken = () => {};

export const GameField = (props: { setStatusX: (status: Status) => void }) => {
  const ctx = useConnectFourContext();
  ctx.setColorB(ctx.colorA)
  return (
    <>
      <View style={styles.outerField}>
        <View style={styles.innerField}></View>
        <TouchableOpacity
          onPress={placeToken}
          style={styles.column}
        ></TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Hier erscheinen die Anweisungen.</Text>
        <Button
          title={"Restart"}
          onPress={() => props.setStatusX("pickColor")}
          style={[styles.generalButton]}
          textStyle={[styles.buttonText, { fontWeight: "bold" }]}
        ></Button>
      </View>
    </>
  );
};
