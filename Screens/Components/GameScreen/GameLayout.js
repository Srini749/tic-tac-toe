import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './GameLayoutStyle';
import Tile from "./Tile";
import CrossLayout from './CrossLayout';

const matrixx = [...Array(3)].map(e => Array(3).fill(0));

const handlePress = (matrix, rowIndex, colIndex, setMatrix, player) => {
    if(matrixx[rowIndex][colIndex] == 0){
        matrixx[rowIndex][colIndex] = player == 1? 1:2;  
    //  history = [...history, matrix];
       const a= [...matrixx]
        setMatrix(a, player == 1? 2: 1);
        //  console.log(history)
    }     
}


const RendorLayout = ({matrix, setMatrix, width, player}) => {
    return matrix.map((rowValue, rowIndex) => rowValue.map((colValue, colIndex) => 
    <TouchableOpacity onPress={() => {handlePress(matrix, rowIndex, colIndex, setMatrix, player)}}>
        <Tile key={rowIndex.toString() + ":" + colIndex.toString()} width={width / matrix.length} value={colValue}/>
    </TouchableOpacity>
    ));
}



GameLayout=({matrix, player, history, setMatrix, width})=> {
 
    return (
      
        <View style={styles.container}>
            <RendorLayout matrix={matrix} setMatrix={setMatrix} width={width} player={player}/>
        </View>
    );
}

export default GameLayout;