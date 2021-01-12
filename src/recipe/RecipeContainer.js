import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {RecipeShape} from "../PropTypeShapes";
import {shape} from "prop-types";
import Recipe from "./Recipe";
import {fetchRecipeById, fetchSteps} from "../fetchRecipeById";

export default function RecipeContainer() {
    const {recipeId} = useParams()
    const [recipe, setRecipe] = useState({})
    const [steps, setSteps] = useState([])

    useEffect(() => {
        fetchRecipeById(recipeId).then(data => setRecipe(data));
    }, [])

    useEffect(() => {
        fetchSteps(recipeId).then(it => setSteps(it))
    }, [])

    return <div>
        {Object.keys(recipe).length > 0  && steps.length > 0 ? <Recipe {...recipe} steps={steps}/> : <div>Loading Coming</div>}
    </div>
}

RecipeContainer.propTypes = {
    recipe: shape(RecipeShape)
}
