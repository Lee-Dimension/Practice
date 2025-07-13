import React, {useState,} from 'react';
import {TextInput} from 'react-native';

export default function List(){
     const [text, setText] = useState('');

    return(
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
            placeholder="입력하세요"
            value={text}
            onChangeText={setText}
        />
    );
}
