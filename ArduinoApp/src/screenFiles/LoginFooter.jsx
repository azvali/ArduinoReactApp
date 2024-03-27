import React from "react";
import { View, Text, StyleSheet } from "react-native";

function LoginFooter() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Don't have an account?{" "}
                <Text style={styles.span}>Sign Up</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end", // Adjusted to a string value
    },
    text: {
        fontSize: 12,
        color: "#000000",
        textAlign: "center",
        marginBottom: 20,
    },
    span: {
        fontWeight: "bold",
    },
});

export default LoginFooter;
