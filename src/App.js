import React, { useEffect, useState } from 'react'
import './App.scss';
import recipes from './recipes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import RecipeCard from './recipe-card/RecipeCard';
import RecipeContainer from './recipe/RecipeContainer';
import CreateRecipe from './create/CreateRecipe'
import RecipeList from './RecipeList'

function App() {

  return (
      <div className="App">
        <Router>

          <Switch>
            <Route path='/recipes/:recipeId'>
              <RecipeContainer/>
            </Route>
            <Route path='/create'>
              <CreateRecipe />
            </Route>
            <Route exact path='/recipes'>
              <RecipeList />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;

