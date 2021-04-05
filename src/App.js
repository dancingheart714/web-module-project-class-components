import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

//List of Items
const work = [
  {
    name: 'Clean Closets',
    id: 1,
    completed: false,
  },
  {
    name: 'Wash Clothes',
    id: 2,
    completed: false,
  },
  {
    name: 'Dust & Vacuum',
    id: 3,
    completed: false,
  },
  {
    name: 'Run Errands',
    id: 4,
    completed: false,
  },
  {
    name: 'Clean Out Refrigerator',
    id: 5,
    completed: false,
  },
  {
    name: 'Answer Emails',
    id: 6,
    completed: false,
  },
  {
    name: 'Pay Bills',
    id: 7,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      work: work,
    };
  }

  //Input New Item
  addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      work: [...this.state.work, newItem],
    });
    console.log(this.state.work);
  };

  //Check Item Off & On
  toggleItem = (itemId) => {
    this.setState({
      work: this.state.work.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
    console.log(this.state.work);
  };

  //Clear off Completed Tasks
  clearItem = () => {
    const jobDone = this.state.work.filter((work) => !work.completed);
    this.setState({ work: [...jobDone] });
  };

  render() {
    return (
      <div>
        <div>
          <h1>My "To Do" List!</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          toggleItem={this.toggleItem}
          work={this.state.work}
          clearItem={this.clearItem}
        />
      </div>
    );
  }
}

export default App;
