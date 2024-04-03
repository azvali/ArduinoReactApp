import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import axios from 'axios';



function SignUpBody({navigation}){


    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match.');
            return;
        }


        try {
            const response = await axios.post(apiUrl, {
                email: email,
                fullName: fullName,
                password: password, // Ensure your backend hashes the password before storing
            });
            Alert.alert('Success', 'You have been registered successfully.');

            // Optionally, navigate to the login screen or elsewhere
            navigation.navigate('Login');
        } catch (error) {
            // Handle the error, e.g., show an alert
            Alert.alert('Error', 'Registration failed, please try again.');
            console.error(error);
        }
    };

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

            {/* This will be replaced by a proper Sign Up function 
                Also, we need to assign the input fields to variables and send them to the database 
                and store them properly. also we can try to make a pop up for the user when he signs up to
                notify if successful or not maybe if there is an existing email it would notify
            */} 
            <Button title='Sign Up' onPress={() => navigation.navigate('Login')}/>
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