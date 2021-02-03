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
        flex: 1,                         //  Si el padre no se extiende los hijos tampoco
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    box1: {
        backgroundColor: 'navy',
        padding: 20
    },
    box2: {
        backgroundColor: 'yellow',
        padding: 20
    },
    box3: {
        backgroundColor: 'green',
        padding: 20
    },
    box4: {
        backgroundColor: 'teal',
        padding: 20
    },
});

export default App;
