import React from 'react';
import './App.scss';
import recipes from './recipes';
import Recipe from './Recipe';

function App() {
  return (
    <div className="App">
      {recipes.map(recipe => Recipe(recipe))}
    </div>
  );
}

export default App;
