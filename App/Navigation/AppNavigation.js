import { createStackNavigator, createAppContainer } from 'react-navigation';

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
  },
});

export default createAppContainer(AppStack);
