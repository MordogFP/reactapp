import React from 'react';
import KanbanBoard from "./KanbanBoard";
import update from "react-addons-update";
import {MuiThemeProvider} from "material-ui/styles/index";

let cardList = [
    {
        id: 1,
        title: "Read the Book",
        description: "I should read the **whole** book",
        color: "#BD8D31",
        status: "in-progress",
        tasks: []
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)",
        color: "#3A7E28",
        status: "todo",
        tasks: [
            {
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            }
        ]
    }
];

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {cards: cardList};
    }

    addTask(cardId, taskName) {
        console.log("addTask");
        // let prevState = this.state;
        let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
        let newTask = {id: Date.now(), name: taskName, done: false};
        console.log(newTask);
        let nextState = update(this.state.cards, {
            [cardIndex]: {
                tasks: {$push: [newTask]}
            }
        });
        console.log(nextState);
        this.setState({cards: nextState});
    }

    deleteTask(cardId, taskIndex) {
        console.log("deleteTask");
        // let prevState = this.state;
        let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
        let nextState = update(this.state.cards, {
            [cardIndex]: {
                tasks: {$splice: [[taskIndex, 1]]}
            }
        });
        this.setState({cards: nextState})
    }

    toggleTask(cardId, taskIndex) {
        console.log("toggleTask");
        // let prevState = this.state;
        let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
        let newDoneValue;
        let nextState = update(
            this.state.cards, {
                [cardIndex]: {
                    tasks: {
                        [taskIndex]: {
                            done: {
                                $apply: (done) => {
                                    newDoneValue = !done
                                    return newDoneValue;
                                }
                            }
                        }
                    }
                }
            });
        this.setState({cards: nextState});
    }


    render() {
        return (
            <MuiThemeProvider>
                <KanbanBoard cards={cardList} taskCallbacks={{
                    toggle: this.toggleTask.bind(this),
                    add: this.addTask.bind(this),
                    delete: this.deleteTask.bind(this)
                }}/>
            </MuiThemeProvider>);
    }
}