import React from 'react';
import {TextInput,StyleSheet} from 'react-native';

export default function SearchBox({value, onChangeText}){
    return(
        <TextInput
            style={styles.input}
            placeholder="입력하세요"
            value={value}
            onChangeText={onChangeText}
            returnKeyType="search"
        />
    );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderRadius: 12,          
    paddingHorizontal: 10,     // 좌우 여백
    marginHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
});