import React, { useState } from 'react';
import {View, Button, Text, StyleSheet, Modal} from "react-native";
import { FlatList, ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Globaldesgin } from '../styles/global';

import Card from "../shared/cards";
import {MaterialIcons} from "@expo/vector-icons";
import ReviewForm from './reviewForm';



export default function Home({navigation}){

    const [modelOpen, setModalOpen]= useState(false);

    const [reviews, setReviews] = useState([
        ///A Review Object
    {title: "React Native( UWP, IOS, Android )",
     rating:4, body:"lorem ipsum amet", key:"1"},
    {title: "Xamarin ( UWP, IOS, Android )", 
    rating:3, body:"lorem ipsum amet", key:"2"},
    {title: "Flutter ( PWA, IOS, Android )",
     rating:5, body:"lorem ipsum amet", key:"3"},
    {title: "Tkinter ( WPF, Mac, Ubantu )",
     rating:2, body:"lorem ipsum amet", key:"4"},
    {title: "WPF ( Windows 7, 8, XP, 10 )",
     rating:5, body:"lorem ipsum amet", key:"5"},


    ]);

    const Navigates= ()=>{
        navigation.push("Review");
    }

    const addReview = (review)=>{
        review.key = Math.random().toString();
        setReviews((pre)=>{
            return [review, ...pre];//Create a new array {new obj + old array}
        });

        setModalOpen(false);
    }

    


    return ( 
<View style={Globaldesgin.container}>

        <Modal visible={modelOpen} animationType="slide">
            <ScrollView>
            <View style={css.container}>
               
                <MaterialIcons 
            name = "close" size = {24} style={{
                borderWidth:1,
                borderColor:"red",
                alignSelf:"center",
                padding:10,
                borderRadius : 11,
                color:"red",
                borderStyle:"dashed",
                marginTop:24,
                    }}
                    onPress = {()=> setModalOpen(false)}
                    />

             <ReviewForm addReview = {addReview} />
            </View>
           
            </ScrollView>
        </Modal>

        <MaterialIcons 
            name = "add" size = {24} style={{
                borderWidth:1,
                borderColor:"#aaa",
                alignSelf:"center",
                padding:10,
                borderRadius : 11,
                color:"#aaa",
                borderStyle:"dashed"
            }}
    onPress = {()=> setModalOpen(true)}
    />

    <FlatList style={{flex:1}}
    data={reviews}
    renderItem={
        ({ item }) =>(
    <TouchableOpacity style={{

  }} onPress={()=>{

        navigation.navigate("Review", item);

    }}>
        <Card>
        <Text style={Globaldesgin.titleText}
        >{item.title}
        </Text>
        </Card>
  </TouchableOpacity>

        )
    }
    
    />
   
</View>


    )


}

const css = StyleSheet.create({

    container:{
        padding: 34
    },

    titleText:{
       fontFamily:"annex-bold",
       fontSize:32,
    }


})