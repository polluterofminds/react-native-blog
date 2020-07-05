import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import IndexScreen from './src/screens/IndexScreen'
import { AppProvider } from './src/context/BlogContext'

const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName: 'Index', 
  defaultNavigationOptions: {
    title: 'Blog Posts'
  }
})

const App = createAppContainer(navigator)

export default () => {
  return <AppProvider><App /></AppProvider>
}

