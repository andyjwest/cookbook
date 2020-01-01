import React from 'react';
import {useParams} from "react-router-dom";
import Recipe from './Recipe';
import recipes from './recipes';

export default function RecipeContainer(){
  let recipeId = useParams().recipeId;
  return <Recipe {...recipes.find(it => it.id === recipeId)}/>
}