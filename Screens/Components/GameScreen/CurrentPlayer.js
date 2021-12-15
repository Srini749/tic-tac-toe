import { StylesContext } from '@material-ui/styles';
import React from 'react';
import { View, Text } from 'react-native';
import styles from './CurrentPlayerStyle'

function CurrentPlayer(props) {
    return (
        <View style={styles.container}>
            <Text style= {styles.text}>Player {props.currentPlayer}</Text>
        </View>
    );
}

export default CurrentPlayer;