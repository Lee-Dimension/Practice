import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Category from './Components/Category';

const Tab = createMaterialTopTabNavigator();

export default function NavScreen(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontSize: 20,
                    fontWeight: 'bold',
                    },
                }}
            >
            <Tab.Screen  name="소비" component={Category} />
            <Tab.Screen  name="유통" component={Category} />
        </Tab.Navigator>
    );
}
