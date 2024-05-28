import React from 'react';
import { View } from 'react-native';
import Login from "./src/screens/Login.jsx" 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import SignUp from "./src/screens/SignUp.jsx"
import Home from './src/screens/Home.jsx';


const Stack = createNativeStackNavigator();


function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name = "SignUp" component={SignUp}/>
        <Stack.Screen name = "Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
