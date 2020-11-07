
///App Install Packages 
///Package react-navigation , 
///Package react-navigation-stack,
///Packages copied from Nav
///Package react-navigation-drawer,
///Package formik
///Package yup



import { AppLoading } from 'expo';
//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StatusBar } from "react-native";
import Home from './Screens/home';
import * as Font from 'expo-font';
import Nav from "./routes/draw";
import About from './Screens/about';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const getFonts = async()=>
{
  await Font.loadAsync({
      'annex': require('./assets/fonts/Lato-Regular.ttf'),
      'annex-bold': require('./assets/fonts/Lato-Bold.ttf'),

  })
;
   console.log("Loaded")
}
export default function App() {

 const[fontsLoaded, setFontState] = useState(false);

 if (fontsLoaded){
   console.log("App Started")
  return (
    <SafeAreaProvider>
      <StatusBar  barStyle="light-content" backgroundColor="#73939d"/>
    <Nav>
      
     
   
    </Nav>
    </SafeAreaProvider>
  );
 }
 else{
 
  return(
  <AppLoading 
  startAsync ={getFonts}
  onFinish={()=> setFontState(true)}
  />
  
  );

 }


}


