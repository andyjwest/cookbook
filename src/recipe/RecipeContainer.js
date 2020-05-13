import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Recipe from "./Recipe";

export default function RecipeContainer() {
    let {recipeId} = useParams();
    const [recipe, setRecipe] = useState()
    useEffect(() => {

        let url = new URL(`${process.env.REACT_APP_API_URL}/recipes/${recipeId}`)

        fetch(url)
            .then(r => r.json())
            .then((result => {
                setRecipe(result)
            }), error => {
                console.log(error)
            })
        return setRecipe({})
    }, [recipeId])

    return <div>
        {!recipe ? <div>Loading Coming</div> : <div>
            <Recipe {...recipe}/>
        </div>}
    </div>
}
