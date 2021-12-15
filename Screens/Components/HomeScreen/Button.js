import { StylesContext } from '@material-ui/styles';
import React from 'react';
import styles from './ButtonStyle';
import { View , TouchableOpacity, Text} from 'react-native';


function CustomButton(props) {

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <Text style = {styles.text}>
                    PLAY !
                </Text>
         </TouchableOpacity>
        </View>
    );
}

export default CustomButton;