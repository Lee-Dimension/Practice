import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function Category(){
    const [categories, setCategories] = useState([]);

    const addCategory = () => {
        setCategories([...categories, {}]);
    };

    return(
        <View>
            <FlatList
                data={categories}
                renderItem={() => <View style={StyleSheet.box}/>}


                />

        </View>
    )

}