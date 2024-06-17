import { Text, View, StyleSheet, TouchableOpacity, Alert, ScrollView } from "react-native";
import { InputForm } from "../../components";
import { useForm } from "react-hook-form";
import useStorage from "../../hooks/useStorage";
import { SafeAreaView } from "react-native-safe-area-context";


export function Home() {

    const { control, handleSubmit } = useForm({})
    const { saveItem } = useStorage();

    const handleSave = async (data) => {
        if (data.nomeItem.length < 3) {
            Alert.alert('Atenção', 'A descrição do produto é muito curta.');
            return
        }
        if (data.codItem.length != 6) {
            Alert.alert('Atenção', 'O código deve conter 6 caracteres.');
            return
        }
        if (data.qtdItem.length < 1) {
            Alert.alert('Atenção', 'Deve ter ao menos 1 item.');
            return
        }

        const id = Math.random().toString(36).substring(7);
        const info = { id: id, nome: data.nomeItem, codigo: data.codItem, qtd: data.qtdItem }
        await saveItem('@item', info)
        console.log('Item adicionado')
        Alert.alert('Info', 'Item adicionado com sucesso!')
    }

    return (
        <SafeAreaView style={styles.container1}>

            <View style={styles.containerTitle}>
                <Text style={styles.titlePrincipal} >Adicionar itens</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>

                <View style={styles.containerInput}>

                    <InputForm control={control} name='nomeItem' placeholder='Nome do produto' title='Produto:'
                        styleTitle={styles.title} styleInput={[styles.input]} />

                </View>

                <View style={styles.containerInput}>

                    <InputForm control={control} name='codItem' placeholder='Código do produto' title='Código:'
                        styleTitle={styles.title} styleInput={[styles.input]} />

                </View>

                <View style={styles.containerInput}>

                    <InputForm control={control} name='qtdItem' placeholder='Qtd' title='Quantidade:'
                        styleTitle={styles.title} styleInput={[styles.inputqtd]} keyboardType='numeric' />

                </View>

                <View style={styles.containerBtn}  >
                    <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSave)} >
                        <Text style={styles.textBtn}>
                            Adicionar
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({

    container1: {
        flex: 1,
        backgroundColor: '#F0F0F0',
    },
    containerTitle: {
        backgroundColor: '#0d7066',
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },
    titlePrincipal: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerInput: {
        width: '100%',
        alignItems: 'center',
        justifyContent: "center",
        gap: 8,
    },
    title: {
        fontSize: 22,
        marginTop: 28,
        fontWeight: 'bold',
        color: '#689c97'
    },
    input: {
        borderWidth: 2,
        borderColor: '#0d7066',
        height: 60,
        marginBottom: 12,
        fontSize: 20,
        borderRadius: 15,
        padding: 15,
        width: '80%',
        backgroundColor: '#F0F0F0',
    },
    inputqtd: {
        borderWidth: 2,
        borderColor: '#0d7066',
        height: 60,
        marginBottom: 12,
        fontSize: 20,
        borderRadius: 15,
        padding: 15,
        width: '20%',
        backgroundColor: '#F0F0F0',
    },
    iconButton: {
        // backgroundColor: '#3fbfb7', // Talvez fique legal essa cor
        backgroundColor: '#4682B4',
        borderRadius: 20,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerBtn: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    button: {
        backgroundColor: '#0d7066',
        width: '80%',
        height: 60,
        borderRadius: 12,
        paddingVertical: 12,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtn: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    scrollViewContent: {
        flexGrow: 1,
    },

})