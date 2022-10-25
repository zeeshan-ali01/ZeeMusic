import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import Routes from './src/routes/Routes'

import { Provider } from 'react-redux'
import { store } from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})