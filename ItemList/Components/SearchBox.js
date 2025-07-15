import React from 'react';
import {TextInput,StyleSheet,View,Text} from 'react-native';

export default function SearchBox({value, onChangeText}){
    return(
      <View>
        <TextInput
            style={styles.input}
            placeholder="입력하세요"
            value={value}
            onChangeText={onChangeText}
            returnKeyType="search"
        />
          <View style = {{flexDirection :'row', alignItems:'center'}}>
            <Text>왼쪽</Text>
            <Text>오른쪽</Text>
          </View>
        </View>
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