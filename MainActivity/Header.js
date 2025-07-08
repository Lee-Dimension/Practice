import React from 'react';
import {Text,StyleSheet,View} from 'react-native';


function Header(){

    return(
        <Text style={styles.title}>Inventory Management</Text>

    );
    
};
const styles = StyleSheet.create({
    title: {
        fontSize:20,
        fontWeight:'bold',
    },
});

export default Header;