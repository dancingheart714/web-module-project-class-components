// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div className="todolist">
      {props.work.map((item) => (
        <Todo toggleItem={props.toggleItem} key={item.id} item={item} />
      ))}

      <button onClick={props.clearItem} className="clear-btn">
        Clear Completed Jobs
      </button>
    </div>
  );
};

export default TodoList;
