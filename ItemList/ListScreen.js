import React, {useState} from 'react';
import { View, ScrollView,StyleSheet, SafeAreaView,StatusBar } from 'react-native';
import List from './Components/List'
import SearchBox from './Components/SearchBox'
import Header from '../MainActivity/Components/Header';

export default function ListScreen(){
    const [text, setText] = useState('');
    
    return(
        <>
            <StatusBar
                backgroundColor="transparent"  
                translucent={true}          
                barStyle="dark-content"     
            />
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Header text = "Search"/>
                </View>
                <View style={styles.content}>
                    <SearchBox
                        value={text}
                        onChangeText={setText}
                    />
                </View>
                <View
                style={styles.footer}>
                    <List filter={text} contentContainerStyle={styles.footerContent}/>
                </View>
            </SafeAreaView>
        </>
    );
};
    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: 'white',
        },
        header:{
            flex:0.78,
            backgroundColor: 'white',
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        content:{
            flex:0.5,
        },
        footer:{
            flex:8,
            backgroundColor: 'white',
        }, 
        footerContent: {
            flexGrow: 1,
            padding: 16,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });     