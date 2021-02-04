import React from 'react';
import { Image, Text, View, ScrollView } from 'react-native';

/** Styles */
import { styles } from './src/assets/styles/app.styles';

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

                    <Text style={ styles .title }>Hospedajes en los LA</Text>
                    <View
                        style={ styles .list }
                    >

                        <View style={ styles .listItem }>     
                            <Image 
                                style={ styles .best }
                                source={ require( './src/assets/img/hospedaje1.jpg' ) }
                            />
                            <Text style={ styles .description }>Salón de juegos</Text>
                        </View>
                        <View style={ styles .listItem }>     
                            <Image 
                                style={ styles .best }
                                source={ require( './src/assets/img/hospedaje2.jpg' ) }
                            />
                            <Text style={ styles .description }>Salón de reuniones</Text>
                        </View>
                        <View style={ styles .listItem }>     
                            <Image 
                                style={ styles .best }
                                source={ require( './src/assets/img/hospedaje3.jpg' ) }
                            />
                            <Text style={ styles .description }>Lo mejor para la familia</Text>
                        </View>
                        <View style={ styles .listItem }>     
                            <Image 
                                style={ styles .best }
                                source={ require( './src/assets/img/hospedaje4.jpg' ) }
                            />
                            <Text style={ styles .description }>Grandes espacios</Text>
                        </View>

                    </View>

                </View>
                
                <Text style={ styles .copyright }>Copyright @ 2021</Text>

            </ScrollView>
        </>
    );
};

export default App;
