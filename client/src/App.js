import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  useEffect(() => {
    console.log('On Load')

    axios.get('/api')
      .then(response => {
        console.log(response)
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        Sample Full Stack
      </header>
    </div>
  );
}

export default App;
