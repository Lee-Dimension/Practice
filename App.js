import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainActivity from './MainActivity/MainActivity';
import ListScreen     from './ItemList/ListScreen';
import Category     from './NavScreen/Components/Category';

 const Stack = createNativeStackNavigator();

 export default function App() {
   return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainActivity" component={MainActivity} />
        <Stack.Screen name="Category"     component={Category} />
        <Stack.Screen name="ListScreen"     component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
   );
 }
