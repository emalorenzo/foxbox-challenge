import React from 'react';
import { Text, View, Image, FlatList, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import styles from './styles';
import colors from '../../Theme/Colors';

const CocktailFinderScreen = ({ drinks }) => {
  const renderCocktail = data => {
    const { item, index } = data;
    return (
      <View key={index} style={styles.card}>
        <Image style={styles.drinkImage} source={{ uri: item.strDrinkThumb }} />
        <Text style={styles.drinkTitle}>{item.strDrink}</Text>
      </View>
    );
  };
  const keyExtractor = item => item.idDrink;
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={colors.background}
        style={styles.container}
      >
        <FlatList
          style={styles.list}
          data={drinks}
          renderItem={renderCocktail}
          keyExtractor={keyExtractor}
          ListFooterComponent={View}
          ListFooterComponentStyle={styles.listFooter}
        />
      </LinearGradient>
    </>
  );
};

CocktailFinderScreen.defaultProps = {
  drinks: [],
};

CocktailFinderScreen.propTypes = {
  drinks: PropTypes.arrayOf(
    PropTypes.shape({
      idDrink: PropTypes.string,
      strDrink: PropTypes.string,
      strDrinkThumb: PropTypes.string,
    })
  ),
};

export default CocktailFinderScreen;
