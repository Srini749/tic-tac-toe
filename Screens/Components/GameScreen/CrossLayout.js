import React from 'react';
import {View} from 'react-native';
import styles from './CrossLayoutStyle'

function CrossLayout(props) {

    const array = [...Array(props.size - 1)].map(e => Array(props.size - 1).fill(0)); 

    const outerContainerStyle = {height: props.width, width: props.width, position: "relative" }

    const innerContainerStyle = {height: props.width, width: props.width, position: "absolute" }

    const RendorVertical = () => {
        return array.map((value, index) => <View key={"V" + index.toString()} style={styles.verticalLine} />);
    }

    const RendorHorizontal = () => {
        return array.map((value, index) => <View key={"H" + index.toString()} style={styles.horizontalLine} />);
    }

    return (
        <View style={outerContainerStyle}>
            <View style={innerContainerStyle}>
                <View style={styles.verticalContainerStyle}>
                    <RendorVertical /> 
                </View>
            </View>
            <View style={innerContainerStyle}>
                <View style={styles.horizontalContainerStyle}>
                    <RendorHorizontal />  
                </View>
            </View>
           
            
        </View>
        
    );
}

export default CrossLayout;