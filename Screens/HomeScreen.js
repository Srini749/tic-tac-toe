import React, { useState } from 'react';
import {View, Text, TextInput, Dimensions, ToastAndroid} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from './Components/HomeScreen/Button';
import Dropdown from './Components/HomeScreen/Dropdown';
// import CloseIcon from '@mui/icons-material/Close';
import styles from './HomeScreenStyle'

function HomeScreen({navigation}) {
    const [size, setSize] = useState(null);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [gridSize, setGridSize] = useState(null);
    const sizeList = [{label: '3 X 3', value: 3},
    {label: '4 X 4', value: 4},{label: '5 X 5', value: 5}, {label: '6 X 6', value: 6} ];

    const container={
        ...styles.container,
        width: windowWidth,
        height: windowHeight,
    }

    const handlePress = () => {
        if(gridSize!=null){
            navigation.navigate('Game', {
                gridSize: gridSize,
              });
        }else{
            ToastAndroid.show("Select Size", ToastAndroid.SHORT)
        }
       
    }

    return (
        <SafeAreaView>
            <View style={container}>
                <Text style={styles.textStyle}>Select gird size !</Text>
                <View style={styles.inputContainer}>
                    <Dropdown selectedItem={gridSize} items={sizeList} onChange={setGridSize}/>
                </View>
                <Button style={styles.button} onPress={handlePress}/>
            </View>
        </SafeAreaView>
        
    );
}

export default HomeScreen;