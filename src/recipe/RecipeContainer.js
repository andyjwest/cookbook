import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {RecipeShape} from "../PropTypeShapes";
import {shape} from "prop-types";
import Recipe from "./Recipe";
import {fetchRecipeById, fetchSteps} from "../fetchRecipeById";
import {CircularProgress} from "@material-ui/core";
import SimpleView from "./SimpleView/SimpleView";

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
        {Object.keys(recipe).length > 0  && steps.length > 0 ? <SimpleView {...recipe} steps={steps}/> : <CircularProgress />}
    </div>
}

RecipeContainer.propTypes = {
    recipe: shape(RecipeShape)
}
