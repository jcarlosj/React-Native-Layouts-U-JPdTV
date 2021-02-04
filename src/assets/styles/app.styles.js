import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'     //  gap no funciona en Flexbox
    },
    listItem: {
        flexBasis: '49%'       /** Igual que un width cuando se usa FlexBox */
    },
    description: {
        fontSize: 12
    },
    copyright: {
        textAlign: 'center',
        marginVertical: 15
    }
});