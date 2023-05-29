import './App.css';
import React from 'react';
import Tweet from './Tweet';

function App(){
  
  return(
    <div className="app">
      <h1>Tweet Generator</h1>
      <h2>Using the fields below, create your own viral tweet!</h2>

      {/* Tweet.js component */}
      <Tweet />

    </div>
  );
}

export default App;