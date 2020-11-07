///Controlling App Routes 

import { createStackNavigator} from 'react-navigation-stack';

import Home from '../Screens/home';
import Review from '../Screens/review';
import About from '../Screens/about';
import Header from "../shared/header";
import React from "react";


const screens = {

// "home": Home, flutter way
// "review":Review,
 About: {
     screen: About,
     navigationOptions: ({navigation})=>{
        return { 
            headerTitle:()=> <Header navigation={navigation} title="About Dev Tools" />
           }
           // headerStyle:{backgroundColor:"#73939f" }
        
        // headerStyle:{backgroundColor:"#73939f" }
     }
 },

 

 
};



const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{backgroundColor:"#73939d", 
       // height:90,
    },

     headerTintColor:"#fff"
    }
})
//const HomeStack1 = createStackNavigator(screens1)


;
//Exporting Default Can be Renamed
export default AboutStack;

