import React from 'react';
import { StyleSheet, View } from 'react-native';

const App = () => {
    return (
        <>
            <View style={ styles .container }>
                <View style={ styles .box1 }></View>
                <View style={ styles .box2 }></View>
                <View style={ styles .box3 }></View>
                <View style={ styles .box4 }></View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    /** Flexbox para React Native usa flexbox por defecto y su direccion por defecto es vertical, es decir: flexDirection: column */
    container: {
        backgroundColor: 'cornflowerblue',
        flex: 1
    },
    box1: {
        backgroundColor: 'navy',
        flex: 1,
        padding: 20
    },
    box2: {
        backgroundColor: 'yellow',
        flex: 1,
        padding: 20
    },
    box3: {
        backgroundColor: 'green',
        flex: 1,
        padding: 20
    },
    box4: {
        backgroundColor: 'teal',
        flex: 1,
        padding: 20
    },
});

export default App;
