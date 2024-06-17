import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function ItemList({ data, removeItem }) {

    const [id, nome, codigo, qtd] = data

    return (
        <Pressable onPress={removeItem} style={styles.container}>

            <View style={styles.c1}>
                <Text style={styles.label}>Código: </Text>
                <Text style={styles.text}>{codigo}</Text>
            </View>
            <View style={styles.c2} >
                <Text style={styles.label}>Nome: </Text>
                <Text style={styles.text}>{nome}</Text>
            </View>
            <View style={styles.c3} >
                <Text style={styles.label}>Quantidade: </Text>
                <Text style={styles.text}>{qtd}</Text>
            </View>

        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#689c97',
        padding: 14,
        width: '100%',
        marginBottom: 14,
        borderRadius: 12,
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'space-between'
    },
    text: {
        color: '#FFF',
        fontSize: 16
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF'
    },
    c1: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    c2: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    c3: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})