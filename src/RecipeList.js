import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";

export default function RecipeList() {
    const [search, setSearch] = useState()
    const [allRecipes, setAllRecipes] = useState([])

    useEffect(() => {

        let url = new URL(`${process.env.REACT_APP_API_URL}/recipes`)

        fetch(url.href)
            .then(r => r.json())
            .then((result => {
                console.log(result)
                setAllRecipes(result)
            }), error => {
                console.log(error)
            })
    }, [search])

    return <div>
            {allRecipes.map(recipe => (
                <div key={recipe.id} >
                    <Link to={`/recipes/${recipe.id}`}>
                    <img src={recipe.titleImage} alt={recipe.title} style={{width: "100%", height: "100%"}}/>
                    </Link>
                    <p>{recipe.title}</p>
                </div>
            ))}
    </div>
}
