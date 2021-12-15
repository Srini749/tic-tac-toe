import React from 'react';
import {View, Text} from "react-native";
import styles from "./TileStyle";

function Tile(props) {

    const containerStyle = {...styles.container,width: props.width , height: props.width }

    const textStyle = {...styles.textStyle, fontSize: props.width/2}

    const text = props.value == 0? " " : props.value == 1? "X" : "O"; 

    return (
        <View style={containerStyle}>
            <Text style={textStyle}>{text}</Text>
        </View>
    );
}

export default Tile;