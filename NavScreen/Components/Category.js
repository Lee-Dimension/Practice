import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, FlatList,} from 'react-native';

export default function Category({navigation}){
    const [categories, setCategories] = useState([]);
    const data = [...categories, {type: 'plus', id: 'plus-btn'}];

    const addCategory = () => {
        setCategories([...categories, {id: Date.now().toString()}]);
    };
    
    return(
        <View style={{padding: 15 }}>
            <FlatList
            data={data}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({ item, index }) =>
                item.type === 'plus' ? (
                <TouchableOpacity style={[styles.box, styles.plusBox]} onPress={addCategory}>
                    <Text style={styles.plusText}>+</Text>
                </TouchableOpacity>
                ) : (
                <TouchableOpacity style={styles.box} onPress={() =>
                    navigation.navigate('ListScreen')}>
                        
                    <Text style={styles.boxText}>카테고리 {index + 1}</Text>
                </TouchableOpacity>
                )
            }
            contentContainerStyle={{ paddingHorizontal: 12, gap: 10 }}
            columnWrapperStyle={{ justifyContent: 'space-between', gap: 10 }}
            />  
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flexBasis: '48%',   
        maxWidth: '48%',
        minWidth: '48%',
        backgroundColor: '#f0f0f0',
        marginVertical: 5,
        height: 80,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },
    boxText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    plusText: {
        color: '#0EB4FC',
        fontSize: 40,
        fontWeight: 'bold',
        lineHeight: 80, 
        textAlign: 'center',
    },
});
