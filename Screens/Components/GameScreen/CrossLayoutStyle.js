import { StyleSheet } from "react-native";
 
export default StyleSheet.create({


    verticalContainerStyle: {
        flex: 1,
        flexDirection: 'row', justifyContent: 'space-evenly'
    },

    horizontalContainerStyle : {
        flex: 1,
        zIndex: 1,
        top: 0,
        left: 0,
        flexDirection: 'column', justifyContent: 'space-evenly'
    },

    verticalLine: {
        backgroundColor: 'black', width: 4, height: '100%'
    },

    
    horizontalLine: {
        backgroundColor: 'black', height: 4, width: '100%'
    }

});