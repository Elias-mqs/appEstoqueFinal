import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Button, ScrollView } from 'react-native'; // Removi o import do componente Alert pois não está sendo usado diretamente
import * as ImagePicker from 'expo-image-picker';
import { useInventory } from './InventoryContext';
import { Alert } from 'react-native'; // Adicionei a importação do componente Alert

function AddItemScreen() {
  const { addItem } = useInventory();
  const [itemName, setItemName] = useState('');
  const [itemId, setItemId] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [image, setImage] = useState(null);



  const pickImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permissão para acessar a galeria é necessária!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleAddItem = () => {
    const newItem = {
      id: Math.random().toString(),
      name: itemName,
      itemId: itemId,
      description: itemDescription,
      quantity: parseInt(itemQuantity),
      image: image,
    };
    addItem(newItem);
    setItemName('');
    setItemId('');
    setItemDescription('');
    setItemQuantity('');
    setImage(null);

    // Exibir mensagem de sucesso 
    setTimeout(() => {
      Alert.alert('Sucesso', 'Item adicionado com sucesso');
    }, 10); // Corrigido o tempo 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Adicionar Item</Text>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Escolher Foto</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Nome do Item"
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        style={styles.input}
        placeholder="ID"
        value={itemId}
        onChangeText={setItemId}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={itemDescription}
        onChangeText={setItemDescription}
        multiline={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={itemQuantity}
        onChangeText={setItemQuantity}
        keyboardType="numeric"
      />
      <Button title="Adicionar" onPress={handleAddItem} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default AddItemScreen;


