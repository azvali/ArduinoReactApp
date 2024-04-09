import { initializeApp } from '@react-native-firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyBDpmWq-ACAJd0t2-vjt46h0Yz04wGuXxc",
    authDomain: "r534-b6497.firebaseapp.com",
    projectId: "r534-b6497",
    storageBucket: "r534-b6497.appspot.com",
    messagingSenderId: "523335011943",
    appId: "1:523335011943:web:102aaa6a21467459e18ec2",
    measurementId: "G-5BEZ692CP2"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export {firebaseConfig};