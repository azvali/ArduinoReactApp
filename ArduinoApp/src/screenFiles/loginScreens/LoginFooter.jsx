import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function LoginFooter({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Don't have an account?{"           "}
                <Button  title="SignUp" onPress={() => navigation.navigate('SignUp')}>Sign Up</Button>
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
        fontSize: 13 ,
        color: "#000000",
        textAlign: "center",
        marginBottom: 20,
    },
    button: {
        width: "30%",
    }
});

export default LoginFooter;
