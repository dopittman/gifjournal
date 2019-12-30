import React from 'react';
import './App.css';
import FormTest from './components/FormTest'
import GifCard from './components/GifCard'

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <FormTest />
      <GifCard
        gif='giftest'
        blurb='blurb'
        mood='mood'
      />
      <GifCard />
      <GifCard />
    </div>
  );
}

export default App;
