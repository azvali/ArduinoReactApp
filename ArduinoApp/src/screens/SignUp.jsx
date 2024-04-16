import LoginHeader from "../screenFiles/loginScreens/LoginHeader";
import SignUpBody from "../screenFiles/signupScreens/SignUpBody";
import React from "react";





function SignUp({navigation}){
    return(
        <>
        <LoginHeader/>
        <SignUpBody navigation={navigation}/>
        </>
    );
}



export default SignUp;