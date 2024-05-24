import React, { createContext, useContext, useState } from 'react';

const InventoryContext = createContext();

export const useInventory = () => useContext(InventoryContext);

export const InventoryProvider = ({ children }) => {
  const [inventoryItems, setInventoryItems] = useState([]);

  const addItem = (item) => {
    console.log("Novo item adicionado:", item);
    setInventoryItems([...inventoryItems, item]);
  };

  const deleteItem = (itemId) => {
    setInventoryItems(inventoryItems.filter((item) => item.id !== itemId));
  };

  return (
    <InventoryContext.Provider value={{ inventoryItems, addItem, deleteItem }}>
      {children}
    </InventoryContext.Provider>
  );
};

