import React from 'react';
import './App.css';
import FormTest from './components/FormTest'
import GifCard from './components/GifCard'
import '../node_modules/uikit/dist/css/uikit.css'
import '../node_modules/uikit/dist/js/uikit'


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <FormTest />
      <GifCard
        gif='Static Test Card'
        mood='Test mood'
        blurb='Test Blurb'
      />
    </div>
  );
}

export default App;
