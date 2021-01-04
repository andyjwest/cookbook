import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {RecipeShape} from "../PropTypeShapes";
import {shape} from "prop-types";
import Recipe from "./Recipe";

export default function RecipeContainer() {
    const {recipeId} = useParams()
    const [recipe, setRecipe] = useState({})
    const [steps, setSteps] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/recipes/${recipeId}`)
            .then(r => r.json())
            .then((result => {
                setRecipe(result)
            }), error => {
                console.log(error)
            })
        setRecipe({})
    }, [])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/recipes/${recipeId}/steps`)
            .then(r => r.json())
            .then((result => {
                setSteps(result)
            }), error => {
                console.log(error)
            })
        return setRecipe({})
    }, [])

    return <div>
        {Object.keys(recipe).length > 0  && steps.length > 0 ? <Recipe {...recipe} steps={steps}/> : <div>Loading Coming</div>}
    </div>
}

RecipeContainer.propTypes = {
    recipe: shape(RecipeShape)
}
