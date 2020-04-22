import React from 'react';
import './recipe-card.scss';
import {Link} from 'react-router-dom';


export default function RecipeCard({title, source, yields, steps, serving, id, titleImage}) {
  return (
      <div className='recipe-card'>
        <div>
          <Link to={`/recipes/${id}`}>
            <img src={titleImage} alt={title}/>
          </Link>
        </div>
        <h2>{title}</h2>
      </div>
  );
}