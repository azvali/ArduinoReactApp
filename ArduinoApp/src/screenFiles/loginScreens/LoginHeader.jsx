import React from 'react';
import {StyleSheet, Image} from 'react-native';
const logoImg = require("../../assets/logo.png");


function LoginHeader() {

  return (
    <>
    <Image source={logoImg} style={styles.logo}/>
    </>
  );
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 50, 
        alignSelf: 'center', 
        width: 100, 
        height: 100, 
    },
});

export default LoginHeader;