import LoginHeader from "../screenFiles/loginScreens/LoginHeader.jsx"
import LoginMainBody from "../screenFiles/loginScreens/LoginMainBody.jsx"
import LoginFooter from "../screenFiles/loginScreens/LoginFooter.jsx"

function Login({navigation}){


    const onPressHandler = () => {
        navigation.navigate('SignUp');
      };

    return(
        <>
            <LoginHeader/>
            <LoginMainBody navigation={navigation}/>
            <LoginFooter navigation={navigation}/>
        </>
    );
}


export default Login;