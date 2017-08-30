import React from 'react';
import KanbanBoard from "./KanbanBoard";

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
    constructor(){
        super();
        this.state = {
            cards: cardList
        }
    }

    addTask(cardId, taskName){
        let newTask = {id:Date.now(), name:taskName, done:false};
        let newCards = this.state.cards.slice();
        newCards.find((card) => card.id === cardId).tasks.push(newTask);
        this.setState({cards: newCards});
    }

    toggleTask(cardId, taskName){
        let newTask = {id:Date.now(), name:taskName, done:false};
        let newCards = this.state.cards.slice();
        newCards.find((card) => card.id === cardId).tasks.push(newTask);
        console.log(newCards);
        this.setState({cards: newCards});
    }

    deleteTask(cardId, taskId){
        let newCards = this.state.cards.slice();
        newCards.find((card) => card.id === cardId).tasks.splice(taskId, 1);
        console.log(newCards);
        this.setState({cards: newCards});
    }

    render() {
        return (
            <KanbanBoard cards={this.state.cards} taskCallbacks={{
                add: this.addTask.bind(this),
                delete: this.deleteTask.bind(this),
                toggle: this.toggleTask.bind(this),
            }} />);
    }
}