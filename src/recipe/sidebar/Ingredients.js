import React from "react";
import IngredientList from "../IngredientList";

export default function Ingredients(props){
    return <div>
        <h2>Ingredients</h2>
        <IngredientList ingredients={props.ingredients} />
    </div>
}