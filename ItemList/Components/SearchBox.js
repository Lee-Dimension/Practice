import React, {useState} from 'react';
import {Text, FlatList} from 'react-native';

const data = [
  { id: '1', title: '첫번째 아이템' },
  { id: '2', title: '두번째 아이템' },
  { id: '3', title: '세번째 아이템' },
];


export default function ItemList(){

    return(
        <FlatList
            data={data} 
            keyExtractor = {item => item.id}
            renterItem={({item}) => (
                <Text>(item.title)</Text>
            )}
        />
    );
}
