import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const App = () => {
    return (
        <>
            <View style={{ flexDirection: 'row' }}>
                <Image 
                    style={ styles .banner }
                    source={ require( './src/assets/img/bg.jpg' ) }
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    /** Flexbox para React Native usa flexbox por defecto y su direccion por defecto es vertical, es decir: flexDirection: column */
    banner: {
        flex: 1,
        height: 250
    }
});

export default App;
