import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CheckList from './CheckList';
import marked from 'marked';
import {CardHeader, CardText} from "material-ui/Card/index";
import CardActionCreators from "../actions/CardActionCreators";
import kanbanStore from "../stores/KanbanStore";

let titlePropType = (props, propName, componentName) => {
    if (props[propName]) {
        let value = props[propName];
        if (typeof value !== 'string' || value.length > 80) {
            return new Error(
                `${propName} in ${componentName} is longer than 80 characters`
            );
        }
    }
};

class Card extends Component {
    constructor(){
        super(...arguments);
        this.state = {
            showDetails: false
        }
    }
    // toggleDetails() {
    //     this.setState({showDetails: !this.state.showDetails})
    // }
    toggleDetails(){
        kanbanStore.dispatch(CardActionCreators.toggleCard(this.props.id));
    }

    render() {
        let cardDetails;
        if (this.state.showDetails){
            cardDetails = <CardText className="card__details">
                <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
                <CheckList cardId={this.props.id} tasks={this.props.tasks} taskCallbacks={this.props.taskCallbacks}/>
            </CardText>
        }
        // let sideColor = {
        //     position: 'absolute',
        //     zIndex: -1,
        //     top: 0,
        //     bottom: 0,
        //     left: 0,
        //     width: 7,
        //     backgroundColor: this.props.color
        // };
        return (
            <div>
                <CardHeader className={this.state.showDetails ? "card__title card__title--is-open" : "card__title"}
                     onClick={this.toggleDetails.bind(this)} title={this.props.title}>
                </CardHeader>
                {cardDetails}
            </div>
        );
    }
}

Card.propTypes = {
    id: PropTypes.number,
    title: titlePropType,
    description: PropTypes.string,
    color: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object,
};

export default Card;