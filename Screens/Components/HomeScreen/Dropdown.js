import DropDownPicker from 'react-native-dropdown-picker';
import React, { useEffect, useState } from 'react';
import {View} from 'react-native'
import styles from './DropdownStyle';
import {Picker} from '@react-native-picker/picker';

function Dropdown(props) {


   const RendorItems = () => {
    return props.items.map(e=> (<Picker.Item label={e.label} value={e.value} />));
  }

  const onChange = (itemValue, itemIndex) => {
    props.onChange(itemValue);
   }

   const RendorInitialItem = () => {
     return (props.selectedItem ==null || props.items.length == 0 ? <Picker.Item label='Please select an option...' value={null} /> : <View></View> );
   }
  

  return (  
          <View style={styles.container}>
             <Picker
              selectedValue={props.selectedItem}
              style={styles.dropdown}
              dropdownIconColor='black'
              onValueChange={onChange}
            >
              {RendorInitialItem()}
              {RendorItems()}
            
            </Picker>
          </View>
                  
         
  );
}

export default Dropdown;