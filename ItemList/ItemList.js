import React, {useState} from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import List from './Components/List'
import SearchBox from './Components/SearchBox'

export default function ItemList(){
    return(
        <SafeAreaView>
            <View>
                <List/>
            </View>
            <ScrollView>
                <SearchBox/>
            </ScrollView>
        </SafeAreaView>
    );
}
