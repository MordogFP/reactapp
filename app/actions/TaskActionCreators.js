import { ADD_TASK } from '../constants';

let TaskActionCreators = {
    addTask(cardId, task) {
        return { type: ADD_TASK, cardId, task };
    }
};



export default TaskActionCreators;