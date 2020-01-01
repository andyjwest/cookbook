import React from 'react';
import './App.scss';
import recipes from './recipes';
import Recipe from './Recipe';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import RecipeCard from "./RecipeCard";

function App() {
    return (
        <Router>
            <div className="App">
                {recipes.map(recipe => <RecipeCard {...recipe} />)}
            </div>
        </Router>
    );
}

export default App;

