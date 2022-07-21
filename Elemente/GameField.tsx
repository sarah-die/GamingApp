import {StyleSheet, Text, TouchableOpacity} from "react-native";

export const GameField = (params: { text: string; action: () => void }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={params.action}>
            <Text style={styles.text}>{params.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 16,
        borderColor: "#000000",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontWeight: "normal",
        fontStyle: "normal",
        color: "#000000",
        fontSize: 18,
        fontFamily: "sans-serif",
    },
});