import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

function MainBody(){

    return(
        <View style={styles.container}>
            <Text style={styles.titles}>Email Address</Text>
            <TextInput style={styles.input} placeholder='email@example.com'></TextInput>
            <Text style={styles.titles} >Password</Text>
            <TextInput secureTextEntry={true} style={styles.input} placeholder='Enter Your Password'></TextInput>
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

export default MainBody;
