import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text, Dimensions} from "react-native";

export default function Card(props){

    return (
<View style={styles.card}>
<View style={styles.cardContent}>
  {props.children}
</View>

</View>

    )

}

const styles = StyleSheet.create({
card:{

    borderRadius:11,
    elevation: 3,
    backgroundColor:"#fff",
    shadowOffset: {width:1, height:1},
    shadowColor:"#333",
    shadowOpacity:0.3,
    marginVertical:8,
    shadowRadius:2,
    marginHorizontal:5,
},

cardContent:{

 marginHorizontal:15,
 marginVertical:15,

}

})