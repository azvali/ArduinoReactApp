import LoginHeader from "../screenFiles/LoginHeader.jsx"
import LoginMainBody from "../screenFiles/LoginMainBody.jsx"
import LoginFooter from "../screenFiles/LoginFooter.jsx"

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