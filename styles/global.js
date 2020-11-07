
//All Style 
//desgin Patterns

import {StyleSheet} from 'react-native';

export const Globaldesgin = StyleSheet.create({
input:{

    margin:5,
    paddingHorizontal:12,
    paddingVertical:10,
    borderWidth:1,
    borderRadius:11,
    borderColor:"#d3d3d3",
    backgroundColor:"#eee",
    color:"#73939d",
    
    justifyContent:"center"

},

ratinginput:{
    margin:5,
    marginTop:9,
    paddingHorizontal:12,
    paddingVertical:19,
    borderWidth:0,
    borderRadius:11,
    borderColor:"#d3d3d3",
    backgroundColor:"#ffff",
    color:"#aaa",
    elevation: 3,

    shadowColor:"#0071ff",
    shadowOffset:{width:1 , height:2},
    shadowOpacity:0.4,
    shadowRadius:3
    
},

    container:{
        padding: 24,
        flex:1,
    

    },

    titleText:{
       fontFamily:"annex-bold",
       fontSize:18,
       padding: 4,
       color:"#333",
    }
    ,
    paragraph:{
        marginVertical: 8,
        lineHeight:20,
    },

    error:{
        color:"gold",
        marginHorizontal:18

    }

})

export const images = {

    rating :{
        "1": require("../assets/rating-1.png"),
        "2": require("../assets/rating-2.png"),
        "3": require("../assets/rating-3.png"),
        "4": require("../assets/rating-4.png"),
        "5": require("../assets/rating-5.png"),
    }
}