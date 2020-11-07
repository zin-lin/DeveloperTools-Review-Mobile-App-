import React from 'react';
import {View, Button, Text, StyleSheet, Image} from "react-native";
import Card from '../shared/cards';
import {Globaldesgin, images } from '../styles/global';

export default function Review({navigation}){

    const rating = navigation.getParam("rating");

const PH=()=>{
  navigation.goBack();
}

    return (
<View style={Globaldesgin.container}>
   <Card>
    <Text style={Globaldesgin.titleText}>{navigation.getParam("title")}</Text>
    <Text style={Globaldesgin.paragraph}>{navigation.getParam("body")}</Text>
    <View style={css.rating}>
        <Text style={{color:"#73939f"}}>Dev-Tool Rating: </Text>
        <Image source={images.rating[rating] } />
    </View>

    </Card>
   
</View>


    )


}

const css = StyleSheet.create({

    container:{
        padding: 34
    }
,
    rating:{

        flexDirection:"row",
        padding:15,
        borderWidth:1,
        borderStyle:"dashed",
        marginTop:10,
        marginBottom:10,
        margin:10,
        borderRadius:11,
        borderColor:"#d3d3d3",
        alignContent:"center",
        justifyContent:"center",
        
    }

})