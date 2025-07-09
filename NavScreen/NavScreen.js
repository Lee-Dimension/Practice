import React from 'react';
import {View,StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Consumption from './Components/Consumption';
import Distribution from './Components/Distribution';

const Tab = createMaterialTopTabNavigator();

export function NavScreen(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Distribution" component={Distribution} />
                <Tab.Screen name="Consumption" component={Consumption} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
