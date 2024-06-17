
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useForm } from 'react-hook-form'
import { InputForm } from '../../components';
import { users } from '../../users';
import { useNavigation } from '@react-navigation/native';



export default function SignIn() {

    const navigation = useNavigation();
    const [erro, setErro] = useState(false)
    const { control, handleSubmit } = useForm({})

    const handleSignIn = (data) => {
        if (data.username.trim() === '' || data.username.length < 3) {
            setErro(true)
            return
        }

        if (data.password.trim() === '' || data.password.length < 8) {
            setErro(true)
            return
        }

        if (data.username === users.username && data.password === users.password) {
            console.log('Usuário confirmado')
            navigation.navigate('HomeStack')
        }

        setErro(false)
    }


    return (
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>

                <InputForm control={control} name='username' placeholder='Usuário' title='Usuário' phTextColor='#FFF'
                    styleTitle={styles.title} styleInput={[styles.input]} />
                {erro && Alert.alert('Verifique seu usuário')}

                <InputForm control={control} name='password' placeholder='Senha' title='Senha' phTextColor='#FFF'
                    styleTitle={styles.title} styleInput={[styles.input]} secureTextEntry={true} />
                {erro && Alert.alert('Verifique sua senha')}

                <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)} >
                    <Text style={styles.buttonText}>Login</Text>
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
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm: {
        backgroundColor: '#689c97',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28,
        color: '#FFF',
        fontWeight: 'bold'
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#FFF',
        color: '#FFF',
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#0d7066',
        width: '100%',
        borderRadius: 12,
        paddingVertical: 12,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    labelError: {
        alignSelf: 'flex-start',
        color: '#ff375b',
    }
})