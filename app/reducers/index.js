import { combineReducers } from 'redux';
import cardsReducer from './CardReducer'

const reducers = combineReducers({
    cards: cardsReducer
});

export default reducers;