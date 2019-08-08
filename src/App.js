import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label for="task-description">Description:</label>
      <input name="task-description" />
      <button id="submit-task">Submit</button>
    </div>
  );
}

export default App;
