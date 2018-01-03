import {FETCH_CARDS} from "../constants";

let CardActionCreators = {
    fetchCards() {
        return { type: FETCH_CARDS };
    }
};

export default CardActionCreators;