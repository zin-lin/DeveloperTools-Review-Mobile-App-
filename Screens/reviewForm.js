import React from "react";

import { Formik } from "formik";
import {Globaldesgin} from "../styles/global";
import { View,Text,TouchableOpacity, TouchableWithoutFeedback , TextInput, Keyboard } from "react-native";
//import { TouchableWithoutFeedback } from "react-native-gesture-handler";
//import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import * as yup from 'yup'

const reviewSchema = yup.object({
    //Title
    title:yup.string()
    .required()
    .min(4),
    //Body
    body:yup.string()
    .required()
    .min(8),
    //Rating 
    rating:yup.string()
    .required()
    .test('is-num-1-5','rating must be a number between 1-5', 
    //Function takes in the value of this field
      (val)=>{
        return parseInt(val) <6 && parseInt(val) >0;
      }  

    )

})

export default function ReviewForm({addReview}){

    return (

        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={{marginTop:20}}>

            <Formik initialValues={{title:'', body:'', rating:''}}
            validationSchema = {reviewSchema}
            onSubmit = {(values)=>{
                //.log(values);
                addReview(values);
                
            }}
            >
                {(props)=> (
                    <View>
                        <View style={{justifyContent:"center",
                        alignSelf:"center"
                    }}>
                            <Text style={Globaldesgin.titleText}>New Tool</Text>
                        </View>

                        <TextInput 
                        style = {Globaldesgin.input}
                        placeholder = "review title"
                        onChangeText={props.handleChange("title")}
                        value = {props.values.title}
                        onBlur= {props.handleBlur("title")}
                        />

                        <Text style={Globaldesgin.error}>
                            {props.touched.title && props.errors.title}
                        </Text>


                     <TextInput 
                        keyboardType="number-pad"
                        style = {Globaldesgin.input}
                        placeholder = "review ratings (1-5)"
                        onChangeText={props.handleChange("rating")}
                        onBlur= {props.handleBlur("rating")}
                        value = {props.values.rating}
                        />
                        <Text style={Globaldesgin.error}>
                            {props.touched.rating && props.errors.rating}
                        </Text>
                 
                    <TextInput 
                        multiline
                        placeholderTextColor="#d3d3d3"
                        style = {{...Globaldesgin.ratinginput,}}
                        placeholder = "write what you want..."
                        onChangeText={props.handleChange("body")}
                        value = {props.values.body}
                        onBlur= {props.handleBlur("body")}

                        />
                        <Text style={Globaldesgin.error}>
                            {props.touched.body && props.errors.body}
                        </Text>

                            <TouchableOpacity 
                            onPress={props.handleSubmit} 
                            style={{
                                backgroundColor:"#73939f",
                                borderRadius:9,
                                margin:20,
                                paddingHorizontal:22,
                                alignSelf:'flex-end',
                                paddingVertical:8,
                               
                            }} >
                            <Text style={{color:"#fff"}}>Add</Text>
                            </TouchableOpacity>

                    </View>

                )}

            </Formik>

        </View>
        </TouchableWithoutFeedback>
    )
    
    ;

}