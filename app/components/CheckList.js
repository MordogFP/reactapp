import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, ListItem} from 'material-ui/List';
import {Checkbox, Divider, FontIcon, TextField} from "material-ui";

class CheckList extends Component {
    checkInputKeyPress(e) {
        if (e.key === 'Enter') {
            this.props.taskCallbacks.add(this.props.cardId, e.target.value);
            e.target.value = '';
        }
    };

    removeIconClick(taskIndex) {
        this.props.taskCallbacks.delete(this.props.cardId, taskIndex);
    };


    updateCheck(taskIndex) {
        this.props.taskCallbacks.toggle(this.props.cardId, taskIndex);
    }

    render() {
        let tasks = this.props.tasks.map((task, taskIndex) =>
            (
                <ListItem key={task.id} className="checklist__task">

                    <Checkbox label={task.name}
                              className="checklist__checkbox"
                        checked={task.done}
                        onCheck={this.updateCheck.bind(this, taskIndex)}
                    />
                    <FontIcon className="material-icons" onClick={this.removeIconClick.bind(this, taskIndex)} >
                        clear
                    </FontIcon>
                </ListItem>
            ));

        return (
            <div className="checklist">
                <List title="">{tasks}</List>
                <TextField onKeyPress={this.checkInputKeyPress.bind(this)} className="checklist--add-task"
                    hintText="Type then hit Enter" placeholder=""
                />
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