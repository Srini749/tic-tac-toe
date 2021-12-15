import React, { useEffect, useState } from 'react';
import { View , Text, Image, TouchableOpacity} from 'react-native';
import styles from './StepsStyle';
import Dropdown from '../HomeScreen/Dropdown';

function Steps(props) {
    let steps = props.history.map((value, index) => {
        return {label: (index + 1).toString(), value: index+1};
    }); 
    
    
 
     const onChange = (e) => {
        
        for(var i=0; i< steps.length - e; i++){
            props.history.pop();
        }
        console.log(props.history.length, "history");
        props.setMatrix(props.history[e-1], props.history.length % 2 == 0? 2: 1, props.history);
    }


    return (
        <View style={styles.container}>
            <Dropdown selectedItem={steps.length} items={steps} onChange={onChange}/>
        </View>
    );
}

export default Steps;