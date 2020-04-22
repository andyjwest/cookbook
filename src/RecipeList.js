import React, { useEffect, useState } from 'react'
import RecipeCard from './recipe-card/RecipeCard'

export default function RecipeList(){
  const [search, setSearch] = useState()
  const [allRecipes, setAllRecipes] = useState([])

  useEffect(()=>{

    let url = new URL('http://localhost:3001/recipes')
    search && url.searchParams.append('search', search);

    fetch(url)
      .then(r => r.json())
      .then((result => {
        setAllRecipes(result)
      }), error => {
        console.log(error)
      })
  }, [search])

  return <div className='card-container'>
    <div>Search: <input value={search} onChange={e=> setSearch(e.target.value)}/></div>
    {allRecipes.map(recipe => <RecipeCard key={recipe.id} {...recipe} />)}
  </div>
}