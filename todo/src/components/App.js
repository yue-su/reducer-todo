import React, {useReducer} from 'react';
import {addTask, deleteTask} from '../actions'
import Tasklist from './Tasklist';

const initialTasks = []

function App() {

const [state, dispath] = useReducer()

  return (
    <div className="ui container grid">
      <div className='ui row'>
        <div className='column eight wide'>
          <Tasklist tasks={[]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
