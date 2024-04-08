import LoginHeader from "../screenFiles/LoginHeader";
import SignUpBody from "../screenFiles/SignUpBody";
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