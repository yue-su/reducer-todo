import React from 'react';
import Tasklist from './Tasklist';


function App() {

  return (
    <div className="ui container grid">
      <div className='ui row'>
        <div className='column eight wide'>
          <Tasklist />
        </div>
      </div>
    </div>
  );
}

export default App;
