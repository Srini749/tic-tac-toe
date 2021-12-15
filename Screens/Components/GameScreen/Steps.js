import React, { useEffect, useState } from 'react';
import { View , Text, Image, TouchableOpacity} from 'react-native';
import styles from './StepsStyle';
import Dropdown from '../HomeScreen/Dropdown';

function Steps(props) {
    const steps = props.history.map((value, index) => {
        return {label: (index + 1).toString(), value: index+1};
    });

 
     const onChange = (e) => {
        console.log("step",e);
        console.log("steps",steps);
        for(var i=0; i< props.history.length - e; i++){
            props.history.pop();
        }
        console.log("history",props.history.length);
        props.setMatrix(props.history[e-1], props.history.length % 2 == 0? 2: 1, props.history);
    }


    return (
        <View style={styles.container}>
            <Dropdown selectedItem={props.history.length} items={steps} onChange={onChange}/>
        </View>
    );
}

export default Steps;