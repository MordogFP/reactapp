import {FETCH_CARDS, TOGGLE_CARD} from "../constants";

let CardActionCreators = {
    fetchCards() {
        return { type: FETCH_CARDS };
    },
    toggleCard(id) {
        return {type: TOGGLE_CARD, id}
    }
};

export default CardActionCreators;