import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchBar from '../Components/SearchBar';

// Screens
import WelcomeScreen from '../Screens/WelcomeScreen';
import CocktailFinderScreen from '../Screens/CocktailFinderScreen';

const AppStack = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  CocktailFinder: {
    screen: CocktailFinderScreen,
    navigationOptions: {
      header: <SearchBar />,
    },
  },
});

export default createAppContainer(AppStack);
