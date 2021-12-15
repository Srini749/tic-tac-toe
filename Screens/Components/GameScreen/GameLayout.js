import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './GameLayoutStyle';
import Tile from "./Tile";
import CrossLayout from './CrossLayout';


const handlePress = (matrix, rowIndex, colIndex, setMatrix, player, history) => {
    if(matrix[rowIndex][colIndex] == 0){
        matrix[rowIndex][colIndex] = player == 1? 1:2;  
        const history1 = [...history, JSON.parse(JSON.stringify(matrix))]  
        setMatrix(matrix, player == 1? 2: 1, history1);
    }     
}


const RendorLayout = ({matrix, setMatrix, width, player, history}) => {
    return matrix.map((rowValue, rowIndex) => rowValue.map((colValue, colIndex) => 
    <TouchableOpacity onPress={() => {handlePress(matrix, rowIndex, colIndex, setMatrix, player, history)}}>
        <Tile key={rowIndex.toString() + ":" + colIndex.toString()} width={width / matrix.length} value={colValue}/>
    </TouchableOpacity>
    ));
}



GameLayout=({matrix, player, history, setMatrix, width})=> {
 
    return (
      
        <View style={styles.container}>
            <RendorLayout matrix={matrix} setMatrix={setMatrix} width={width} player={player} history={history}/>
        </View>
    );
}

export default GameLayout;