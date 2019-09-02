import { connect } from 'react-redux';
import CocktailFinderScreen from './CocktailFinderScreen';

const mapStateToProps = ({ drinks: { list } }) => ({
  drinks: list,
});

export default connect(mapStateToProps)(CocktailFinderScreen);
