import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import axios from 'axios';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  clearDrinks: null,
  fetchDrinksLoading: ['loading'],
  fetchDrinksSuccess: ['list'],
  fetchDrinksError: ['error'],
});

export const DrinksTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  list: [],
  loading: false,
  error: '',
});

/* ------------- Thunks --------------- */

export const fetchDrinks = search => async dispatch => {
  try {
    dispatch({ type: DrinksTypes.FETCH_DRINKS_LOADING, loading: true });

    const { data: { drinks } = {}, status } = await axios(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    );
    if (status === 200) {
      dispatch({ type: DrinksTypes.FETCH_DRINKS_SUCCESS, list: drinks });
    }
  } catch (error) {
    dispatch({ type: DrinksTypes.FETCH_DRINKS_ERROR, error });
  } finally {
    dispatch({ type: DrinksTypes.FETCH_DRINKS_LOADING, loading: false });
  }
};

/* ------------- Reducers ------------- */

const clearDrinks = state => state.merge({ list: [] });
const fetchDrinksLoading = (state, { loading }) => state.merge({ loading });
const fetchDrinksSuccess = (state, { list }) => state.merge({ list });
const fetchDrinksError = (state, { error }) => state.merge({ error });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CLEAR_DRINKS]: clearDrinks,
  [Types.FETCH_DRINKS_LOADING]: fetchDrinksLoading,
  [Types.FETCH_DRINKS_SUCCESS]: fetchDrinksSuccess,
  [Types.FETCH_DRINKS_ERROR]: fetchDrinksError,
});
