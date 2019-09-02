import { connect } from 'react-redux';
import Creators, { fetchDrinks } from '../../Redux/drinks';
import SearchBar from './SearchBar';

const mapStateToProps = ({ drinks: { loading } }) => ({
  loading,
});

const mapDispatchToProps = {
  fetchDrinks,
  clearDrinks: Creators.clearDrinks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
