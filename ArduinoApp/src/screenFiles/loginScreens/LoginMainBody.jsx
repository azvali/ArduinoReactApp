import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native'
import auth from '@react-native-firebase/auth'

function LoginMainBody({navigation}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function checkLogin(){
        if(email == '' || password == ''){
            showAlert('Email or password is empty');
            return;
        }

        try{
            const response = await auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('Home');
        }
        catch(error){
            let errorMessage = '';

            switch(error.code){
                case 'auth/invalid-email':
                    errorMessage = 'The email address is badly formatted.';
                    break;
                case 'auth/user-disabled':
                    errorMessage = 'The user corresponding to the given email has been disabled.';
                    break;
                case 'auth/user-not-found':
                case 'auth/wrong-password':
                    errorMessage = 'The email address or password is incorrect.';
                    break;
                default:
                    errorMessage = error.message;
                    break;
            }
            showAlert(errorMessage);
        }
    }


    function showAlert(message){
        Alert.alert(
            "Error",
            message,
            [
              {
                text: "OK",
                onPress: () => console.log("OK Pressed"),
                style: "cancel"
              }
            ],
            {
              cancelable: true,
              onDismiss: () => console.log("Alert dismissed")
            }
          );
    }


    return(
        <View style={styles.container}>
            <Text style={styles.titles}>Email Address</Text>
            <TextInput style={styles.input} placeholder='email@example.com' onChangeText={(text) => setEmail(text)}></TextInput>
            <Text style={styles.titles} >Password</Text>
            <TextInput secureTextEntry={true} style={styles.input} placeholder='Enter Your Password' onChangeText={(text) => setPassword(text)}></TextInput>

            <Button title='Login' onPress={() => checkLogin()} />
        </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        marginTop: 50,
        width: '100%', 
        height: '50%', 
    },
    titles: {
        fontSize: 18, 
        marginLeft: 25,
        fontWeight: 'bold',
        color: '#000000', 
    },
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1, // Border width for bottom side only
        borderBottomColor: 'black', // Border color for bottom side only
        padding: 10,
    },
});

export default LoginMainBody;
