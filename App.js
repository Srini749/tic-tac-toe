import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import HomeScreen from './Screens/HomeScreen';
import GameScreen from './Screens/GameScreen';


const Stack = createNativeStackNavigator();

const options = {
  headerShown: false 
};


export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={options} name="Home" component={HomeScreen} />
        <Stack.Screen options={options} name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


