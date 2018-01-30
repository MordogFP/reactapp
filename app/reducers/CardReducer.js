import {FETCH_CARDS, TOGGLE_CARD} from '../constants'
import KanbanAPI from  '../API/KanbanAPI'

const cardsReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_CARDS:
            return {...state, cards: KanbanAPI.fetchCards()};
        case TOGGLE_CARD:
            console.log(state.cards.find(
                (card) => card.id === action.id));
            // return {...state, cards: state.cards.find(
            //     (card) => card.id === action.id).showDetails = (currentValue) => !currentValue };
            return {...state, cards: {...state.cards, }};
        default: return state;
    }
};

const initialState ={
    cards: []
};

export default cardsReducer;