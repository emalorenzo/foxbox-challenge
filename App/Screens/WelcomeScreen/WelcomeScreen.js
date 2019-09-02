import React from 'react';
import { Text, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';
import colors from '../../Theme/Colors';

const WelcomeScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.status} />
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={colors.background}
        style={styles.container}
      >
        <Icon name="md-beer" type="ionicon" size={40} color={colors.white} />
        <Text style={styles.title}>
          <Text style={styles.bold}>Cocktail</Text>
          Finder
        </Text>
        <Button
          icon={{
            name: 'search',
            size: 30,
            color: colors.accent,
          }}
          raised
          title="Search your favourite cocktail"
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          onPress={() => navigation.navigate('CocktailFinder')}
        />
      </LinearGradient>
    </>
  );
};

WelcomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default WelcomeScreen;
