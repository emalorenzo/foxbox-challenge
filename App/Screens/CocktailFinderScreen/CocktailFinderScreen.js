import React from 'react';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';
import colors from '../../Theme/Colors';

const CocktailFinderScreen = ({ navigation }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={colors.background}
      style={styles.container}
    >
      <Button
        titleStyle={styles.titleStyle}
        title="Find"
        style={styles.applyButton}
        onPress={() => navigation.navigate('CocktailFinder')}
      />
      <Text style={styles.text}>Search</Text>
    </LinearGradient>
  );
};

CocktailFinderScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default CocktailFinderScreen;
