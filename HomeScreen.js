import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import InventoryScreen from './InventoryScreen';
import AddItemScreen from './AddItemScreen';
import StatisticsScreen from './StatisticsScreen';

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeContent}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Inventory" component={InventoryScreen} />
      <Stack.Screen name="AddItem" component={AddItemScreen} />
      <Stack.Screen name="Statistics" component={StatisticsScreen} />
    </Stack.Navigator>
  );
};

const HomeContent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Estoque</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Inventory')}>
        <Text style={styles.buttonText}>Ver Inventário</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddItem')}>
        <Text style={styles.buttonText}>Adicionar Item</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Statistics')}>
        <Text style={styles.buttonText}>Estatísticas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
