
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation='flipInY'
                    source={require('../../assets/logo2.png')}
                    style={{ width: '100%' }}
                    resizeMode='contain'
                />
            </View>

            <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>Gerencie seu estoque como nenhum outro!</Text>
                <Text style={styles.text} >Faça o login para começar</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d7066'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#0d7066',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        color: "#0d7066"
    },
    text: {
        color: '#0f5c54',
        fontSize: 16
    },
    button: {
        position: 'absolute',
        backgroundColor: '#0d7066',
        borderRadius: 50,
        paddingVertical: 15,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }
})