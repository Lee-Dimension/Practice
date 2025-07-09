import React from 'react';
import {View,StyleSheet, SafeAreaView} from 'react-native';
import Header from './Components/Header';
import BarCodeButton from './Components/BarCodeButton';
import {NavScreen} from '../NavScreen/NavScreen';

function MainActivity(){

    return(
        <SafeAreaView style={styles.container}>
            {/* header */}
            <View style={styles.header}>
                <Header/>
            </View>
            {/* content */}
            <View style={styles.content}>
                <NavScreen/>
            </View>
            {/* footer */}
            <View style={styles.footer}>
                <BarCodeButton/>
            </View>
        </SafeAreaView>
    );
};
    const styles = StyleSheet.create({
        container:{
            flex:1,
        },
        header:{
            flex:1,
            backgroundColor: 'white',
            justifyContent: 'flex-end',
            paddingBottom: 20,
            alignItems: 'center',
        },
        content:{
            flex:8,
        },
        footer:{
            flex:1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
        }, 
    });

export default MainActivity;