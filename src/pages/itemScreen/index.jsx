
import { Text, View, StyleSheet, FlatList, TextInput, Alert } from "react-native";
import useStorage from "../../hooks/useStorage";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { ItemList } from "../../components";
import { MaterialCommunityIcons } from '@expo/vector-icons';



export function ItemScreen() {

    const [listItens, setListItens] = useState([]);
    const { getItem, removeItem } = useStorage();
    const focused = useIsFocused();
    const [searchText, setSearchText] = useState({ nome: '' });
    const [teste, setTeste] = useState([]);
    const [cres, setCres] = useState(true);

    useEffect(() => {
        async function loadItens() {
            const itens = await getItem('@item');
            setListItens(itens);
            setTeste(itens);
        }
        loadItens();
    }, [focused, listItens])

    useEffect(() => {
        try {
            if (searchText === '') {
                setListItens(teste);
            } else {
                setListItens(
                    teste.filter(item => (item.nome?.toUpperCase().indexOf(searchText.nome.toUpperCase()) >= 0 || item.codigo.toUpperCase().indexOf(searchText.nome.toUpperCase()) > -1))
                );
            }
        } catch (error) {
            console.log('erro', error);
        }
    }, [searchText, teste])


    const handleOrder = () => {
        let newList = [...listItens];
        setCres(!cres)
        if (cres) {
            newList.sort((a, b) => (a.nome > b.nome ? 1 : a.nome < b.nome ? -1 : 0))
        } else {
            newList.sort((a, b) => (a.nome > b.nome ? -1 : a.nome < b.nome ? 1 : 0))
        }

        setListItens(newList);

    }

    const handleRemove = async (item) => {
        const itens = removeItem('@item', item);
        setListItens(itens);
        console.log('Item removido')
        Alert.alert('Info', 'Item removido com sucesso.')
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>

            <View style={styles.header}>
                <Text style={styles.title} >Lista de Itens</Text>
            </View>

            <View style={styles.content} >

                <View style={styles.searchContainer}>

                    <TextInput
                        style={styles.searchInput}
                        placeholder='Pesquisar Código/Nome'
                        value={searchText}
                        onChangeText={(t) => setSearchText(t)}
                    />
                    {cres ?
                        <MaterialCommunityIcons
                            name="order-alphabetical-ascending" size={24} color="black" style={styles.searchIcon}
                            onPress={handleOrder} />
                        :
                        <MaterialCommunityIcons
                            name="order-alphabetical-descending" size={24} color="black" style={styles.searchIcon}
                            onPress={handleOrder} />
                    }

                </View>

                <FlatList
                    style={{ flex: 1, paddingTop: 14, marginBottom: 80 }}
                    data={listItens}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        const obj = [item.id, item.nome, item.codigo, item.qtd]
                        return (
                            <ItemList removeItem={() => handleRemove(item)} data={obj} />
                        )
                    }}
                />

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0d7066',
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },
    title: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold'
    },
    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 14,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#0d7066',
        backgroundColor: "#E0E0E0",
        paddingLeft: 14,
        paddingRight: 14
    },
    searchIcon: {
        color: '#0d7066',
        padding: 5
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 10,
        paddingRight: 10,
        paddingLeft: 0,
    }
})