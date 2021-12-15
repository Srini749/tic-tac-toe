import { StyleSheet } from "react-native";

export default StyleSheet.create({
   
   outerContainer: {
       flex:1,
       position: 'relative',
   },

    container : {
     
        position: 'absolute',
        
        paddingHorizontal: 15,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        
    },

    playerContainer:{ 
        position:'absolute',
        top: 30,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        
    }

});