import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CheckList extends Component {
    checkInputKeyPress(e) {
        if (e.key === 'Enter') {
            this.props.taskCallbacks.add(this.props.cardId, e.target.value);
            e.target.value = '';
        }
    };

    removeIconClick(taskIndex) {
        console.log(taskIndex);
        this.props.taskCallbacks.delete(this.props.cardId, taskIndex);
    };

    render() {
        console.log(this.props);
        let tasks = this.props.tasks.map((task, taskIndex) =>
            (
                <li key={task.id} className="checklist__task">
                    <input type="checkbox" defaultChecked={task.done}/>
                    {task.name}
                    <a href="#" className="checklist__task--remove"
                       onClick={this.removeIconClick.bind(this, taskIndex)}/>
                </li>
            ));

        return (
            <div className="checklist">
                <ul>{tasks}</ul>
                <input type="text" onKeyPress={this.checkInputKeyPress.bind(this)} className="checklist--add-task"
                       placeholder="Type then hit Enter"/>
            </div>
        );
    }
}

CheckList.propTypes = {
    cardId: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object
};

export default CheckList;