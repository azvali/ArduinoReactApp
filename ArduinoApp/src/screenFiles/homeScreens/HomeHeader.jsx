import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";


function HomeHeader(){

    const [textPlaceholder, setTextPlaceholder] = useState('');


    connectArduino(){
        
    }


    return(
        <View style= {styles.page_container}>
            <View style= {styles.header_container}>
                <Text style={styles.text_container}>{textPlaceholder}</Text>
            </View>
            <View>
                <Button title="Connect" onPress={() => connectArduino()}>Click</Button>
            </View>
        </View>
    );

}


const styles = StyleSheet.create({
    page_container: {
        width: '100%',
        height: '100%',
    },
    header_container: {
        width: '100%',
        height: '30%',
        backgroundColor: '#a3ffb4',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text_container: {
        fontSize: 36,
        color: '#000000',
        fontWeight: 'bold',
    }
})
export default HomeHeader;