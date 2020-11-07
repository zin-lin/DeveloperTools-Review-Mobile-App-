import React from 'react';
import {View, Button, Text, StyleSheet} from "react-native";
import {Globaldesgin } from '../styles/global';

export default function About(){

    return (
<View style={Globaldesgin.container}>
    <Text style={Globaldesgin.titleText}>About</Text>
</View>


    )


}

const css = StyleSheet.create({

    container:{
        padding: 34
    }

})