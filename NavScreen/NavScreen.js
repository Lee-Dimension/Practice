import React from 'react';
import {View,StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Categorie from './Components/Categorie';

const Tab = createMaterialTopTabNavigator();

export default function NavScreen(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="First" component={Categorie} />
                <Tab.Screen name="Second" component={Categorie} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
