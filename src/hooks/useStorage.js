import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    // Buscar os itens salvos
    const getItem = async (key) => {
        try {

            const itens = await AsyncStorage.getItem(key);
            return JSON.parse(itens) || [];

        } catch (error) {
            console.log('Erro ao buscar')
        }
    }


    // Salvar um item no storage
    const saveItem = async (key, value) => {

        try {
            let itens = await getItem(key);

            itens.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(itens))

        } catch (error) {
            console.log('Erro ao salvar', error)
        }

    }


    // Remover algo do storage
    const removeItem = async (key, produto) => {

        try {
            let itens = await getItem(key);

            let myItens = itens.filter((item) => {
                return (item.id !== produto.id)
            })

            await AsyncStorage.setItem(key, JSON.stringify(myItens))

            return myItens;

        } catch (error) {
            console.log('Erro ao deletar')
        }

    }


    return {
        getItem,
        saveItem,
        removeItem,
    }

}


export default useStorage;