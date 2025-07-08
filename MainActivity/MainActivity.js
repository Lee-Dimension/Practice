import React from 'react';
import {View,StyleSheet} from 'react-native';
import Header from './Header';
import BarCodeButton from './BarCodeButton';

function MainActivity(){

    return(
        <View style={styles.container}>
            {/* header */}
            <View style={styles.header}>
                <Header/>
            </View>
            {/* content */}
            <View style={styles.content}>

            </View>
            {/* footer */}
            <View style={styles.footer}>
                <BarCodeButton/>
            </View>
        </View>
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
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
        },
        footer:{
            flex:1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
        }, 
    });

export default MainActivity;