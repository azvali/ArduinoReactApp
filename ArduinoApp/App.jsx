import React from 'react';
import { View } from 'react-native';
import Header from "./src/screenFiles/LoginHeader";
import MainBody from './src/screenFiles/LoginMainBody'
import Footer from './src/screenFiles/LoginFooter';



function App() {
  return (
    <>
      <Header />
      <MainBody/>
      <Footer/>
    </>
  );
}

export default App;
