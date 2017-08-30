import {FETCH_CARDS} from '../constants'

const cardsReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_CARDS:
            return {...state, cards: action.cards};
        default: return state;
    }
};

const initialState ={
    cards: []
};