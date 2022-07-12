import {StyleSheet, Text, TouchableOpacity} from "react-native";

export const Button = (params: { text: string, action: ()=> void }) => {
    return <TouchableOpacity style={styles.container} onPress={ params.action}
    ><Text style={styles.text}>{params.text}</Text></TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 16,
        backgroundColor: '#b2c2b2',
        borderColor: '#000000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    text: {
        fontWeight: 'normal',
        fontStyle: 'normal',
        color: '#000000',
        fontSize: 18,
        fontFamily: 'sans-serif',
    },
});
