import React from 'react';
import './recipe-card.scss';
import {Link} from 'react-router-dom';


export default function RecipeCard({title, source, yields, steps, serving, id, titleImage}) {
  return (
      <div className='recipe-card'>
        <div>
          <Link to={`${id}`}>
            <img src={titleImage} alt={title}/>
          </Link>
        </div>
        <h2>{title}</h2>
      </div>
  );
}

function Ingredient({name, amount, madeInStep}) {
  console.log(name);
  return (
      <div>{!!amount &&
      `${amount.value} ${amount.units} `}{name}{!!madeInStep &&
      <sup>{madeInStep}</sup>}</div>
  );
}