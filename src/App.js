import React from 'react';
import './App.scss';
import recipes from './recipes';
import Recipe from './Recipe';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import RecipeCard from './recipe-card/RecipeCard';
import RecipeContainer from './RecipeContainer';

function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/:recipeId'>
              <RecipeContainer/>
            </Route>
            <Route exact path='/'>
              <div className='card-container'>
                {recipes.map(recipe => <RecipeCard {...recipe} />)}
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;

