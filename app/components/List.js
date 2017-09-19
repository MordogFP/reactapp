import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import {Card as materialCard} from "material-ui";
import {CardHeader, CardTitle} from "material-ui/Card/index";

class List extends Component {
    render() {
        let cards = this.props.cards.map((card) => {
            return <Card key={card.id}
                         id={card.id}
                         title={card.title}
                         description={card.description}
                         color={card.color}
                         tasks={card.tasks}
                         taskCallbacks={this.props.taskCallbacks}/>
        });
        return (
            <materialCard className="list">
                <CardTitle title={this.props.title} />
                {cards}
            </materialCard>
        );
    }
}

List.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object)
};

export default List;