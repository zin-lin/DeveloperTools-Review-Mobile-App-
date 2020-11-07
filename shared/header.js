import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text, Dimensions,Image, ImageBackground} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

export default function Header({navigation, title}){

const openDrawer= ()=>{
   navigation.openDrawer();
}

return(
<View style={styles.header} >
    <MaterialIcons name="menu" size={28}  onPress={openDrawer} style={{
        color:"#fff" ,
        position:"absolute",
        left:14,
       
    }}/>
    <View style={{flexDirection:"row"}}>
      
    <Text style = {styles.headerText}>{title}</Text>
    </View>

</View>

);

}

const styles = StyleSheet.create({

header:{

 width:Dimensions.get("screen").width,
 height:"100%",
 flexDirection:"row",
 alignItems:"center",
 justifyContent:"center",
 backgroundColor:"#73939d"
},

headerText:{

    fontWeight:"bold",
    fontSize:20,
    color:"#fff",
    letterSpacing:0.6,

}

})