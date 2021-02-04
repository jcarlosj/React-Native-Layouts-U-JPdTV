import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';

const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
};

const App = () => {
    return (
        <>
            <ScrollView>

                <View style={{ flexDirection: 'row' }}>        
                    <Image 
                        style={ styles .banner }
                        source={ require( './src/assets/img/bg.jpg' ) }
                    />
                </View>
                    
                <View style={ styles .container }>

                    <Text style={ styles .title }>Qué hacer en París</Text>
                    <ScrollView horizontal={ true }>
                        {/* Se podría usar un View usando Flexbox pero ScrollView ya soluciona el problema */}
                        <Image 
                            style={ styles .city }
                            source={ require( './src/assets/img/actividad1.jpg' ) }
                        />
                        <Image 
                            style={ styles .city }
                            source={ require( './src/assets/img/actividad2.jpg' ) }
                        />
                        <Image 
                            style={ styles .city }
                            source={ require( './src/assets/img/actividad3.jpg' ) }
                        />
                        <Image 
                            style={ styles .city }
                            source={ require( './src/assets/img/actividad4.jpg' ) }
                        />
                        
                    </ScrollView>

                    <Text style={ styles .title }>Los mejores alojamientos</Text>
                    <View>

                        <View>        
                            <Image 
                                style={ styles .best }
                                source={ require( './src/assets/img/mejores1.jpg' ) }
                            />
                        </View>
                        <View>        
                            <Image 
                                style={ styles .best }
                                source={ require( './src/assets/img/mejores2.jpg' ) }
                            />
                        </View>
                        <View>        
                            <Image 
                                style={ styles .best }
                                source={ require( './src/assets/img/mejores3.jpg' ) }
                            />
                        </View>

                    </View>

                </View>
                
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    /** Flexbox para React Native usa flexbox por defecto y su direccion por defecto es vertical, es decir: flexDirection: column */
    banner: {
        flex: 1,
        height: 250
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },
    container: {
        marginHorizontal: 10
    },
    city: {
        height: 300,
        marginRight: 10,
        width: 250, 
    },
    best: {
        height: 180,
        marginVertical: 5,
        width: '100%'
    }
});

export default App;
