

export const fetchRecipeById = async recipeId =>
    await fetch(`${process.env.REACT_APP_API_URL}/recipes/${recipeId}`)
        .then(r => r.json())
        .then(it => it, error => console.error(error))

export const fetchSteps = recipeId => fetch(`${process.env.REACT_APP_API_URL}/recipes/${recipeId}/steps`)
        .then(r => r.json())
        .then((result => result), error => console.error(error))