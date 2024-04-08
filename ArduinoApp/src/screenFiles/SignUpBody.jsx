import React from "react";
import { View, Text, TextInput, Button, StyleSheet, useState } from "react-native";




function SignUpBody({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');


    async function registerUser(email, password){
        if (password !== confirmPassword) {
            console.log('Passwords do not match!');
            return; 
        }
    
        try{
            await auth().createUserWithEmailAndPassword(email, password)
        }
        catch(error){
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
              } else if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              } else {
                console.error(error);
              }
        }
        
    }

    return(
        <>
            <View style={styles.container}>
            <Text style={styles.titles}>Email Address</Text>
            <TextInput style={styles.input} placeholder='name@example.com'></TextInput>

            <Text style={styles.titles} >Full Name</Text>
            <TextInput secureTextEntry={true} style={styles.input} placeholder='Enter Your Full Name'></TextInput>

            <Text style={styles.titles}>Password</Text>
            <TextInput secureTextEntry={true} style={styles.input} placeholder='Enter Your Password'></TextInput>

            <Text style={styles.titles}>Confirm Password</Text>
            <TextInput secureTextEntry={true} style={styles.input} placeholder='Confirm Your Password'></TextInput>

            <Button title='Sign Up' onPress={() => registerUser(email, password)}/>
        </View>
        </>
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
        borderBottomWidth: 1, 
        borderBottomColor: 'black', 
        padding: 10,
    },
});


export default SignUpBody;