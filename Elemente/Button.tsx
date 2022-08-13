import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

export type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const Button = (params: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, params.style]}
      onPress={params.onPress}
    >
      <Text style={[styles.text, params.textStyle]}>{params.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 16,
    backgroundColor: "#b2c2b2",
    borderColor: "#000000",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  text: {
    fontWeight: "normal",
    fontStyle: "normal",
    color: "#000000",
    fontSize: 18,
    fontFamily: "sans-serif",
  },
});
