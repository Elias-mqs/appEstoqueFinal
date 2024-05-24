import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'; // Importações adicionadas
import { useInventory } from './InventoryContext';
import { MaterialIcons } from '@expo/vector-icons';

const InventoryItem = ({ item, onDeleteItem }) => {
  return (
    <View style={styles.itemContainer}>
      {item.image && <Image source={{ uri: item.image }} style={styles.itemImage} />}
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemId}>ID: {item.itemId}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemQuantity}>Quantidade: {item.quantity}</Text>
      <TouchableOpacity onPress={() => onDeleteItem(item.id)}> {/* TouchableOpacity adicionado */}
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const InventoryScreen = ({ inventoryItems, deleteItem }) => {
  const renderItem = ({ item }) => (
    <InventoryItem item={item} onDeleteItem={deleteItem} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventário</Text>
      <FlatList
        data={inventoryItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemId: {
    fontSize: 16,
    color: '#888',
  },
  itemDescription: {
    fontSize: 16,
  },
  itemQuantity: {
    fontSize: 16,
  },
  itemImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    alignSelf: 'center',
  },
});

export default InventoryScreen;



