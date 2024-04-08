import LoginHeader from "../screenFiles/LoginHeader";
import SignUpBody from "../screenFiles/SignUpBody";
import React from "react";
import auth from '@react-native-firebase/auth'




function SignUp({navigation}){
    return(
        <>
        <LoginHeader/>
        <SignUpBody navigation={navigation}/>
        </>
    );
}



export default SignUp;