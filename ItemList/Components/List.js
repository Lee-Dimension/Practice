import React, {useState} from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';

const data = [
  { id: '1', title: '첫번째 아이템' },
  { id: '2', title: '두번째 아이템' },
  { id: '3', title: '세번째 아이템' },
];


export default function List({filter}){

    const filteredData = data.filter(item => 
        item.title.includes(filter));

    return(
        <FlatList
            data={filteredData} 
            keyExtractor = {item => item.id}
            renderItem={({item}) => (
                <Text>{item.title}</Text>
            )}
        />
    );
}