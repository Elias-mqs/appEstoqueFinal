import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InventoryScreen from './InventoryScreen';
import AddItemScreen from './AddItemScreen';
import StatisticsScreen from './StatisticsScreen';
import { InventoryProvider } from './InventoryContext';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Button, ScrollView } from 'react-native';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <InventoryProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeContent} />
          <Tab.Screen name="Inventory" component={InventoryScreen} />
          <Tab.Screen name="AddItem" component={AddItemScreen} />
          <Tab.Screen name="Statistics" component={StatisticsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </InventoryProvider>
  );
};

const HomeContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Estoque</Text>
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
});

export default HomeScreen;
