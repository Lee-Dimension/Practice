import React from 'react';
import {View,StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import Header from './Components/Header';
import BarCodeButton from './Components/BarCodeButton';
import NavScreen from '../NavScreen/NavScreen';

export default function MainActivity(){

    return(
        <>
        <StatusBar
            backgroundColor="transparent"  
            translucent={true}          
            barStyle="dark-content"     
        />

            <SafeAreaView style={styles.container}>
                {/* header */}
                <View style={styles.header}>
                    <Header text = "Inventory Management"/>
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
        </>
    );
};
    const styles = StyleSheet.create({
        container:{
            flex:1,
        },
        header:{
            flex:0.6,
            backgroundColor: 'white',
            justifyContent: 'flex-end',
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
