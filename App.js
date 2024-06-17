import { NavigationContainer } from "@react-navigation/native"
import { Routes } from './src/routes'
import { StatusBar } from "react-native"

export default function App() {
  return (

    <NavigationContainer style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar backgroundColor='#0d7066' barStyle='light-content' />
      <Routes />
    </NavigationContainer>

  )
}