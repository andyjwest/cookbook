import React from 'react';
import * as PropTypes from 'prop-types'
import Amount from '../components/Amount/Amount';
import './ingredient-list.scss'

const IngredientList = ({ingredients}) => <ul className='w3-ul w3-border ingredient-list'>
    {!!ingredients && ingredients.map(({amount, name, madeInStep}, index) =>
        <li key={index}>
            {amount && <Amount units={amount.units} value={amount.value}/>}
            <div className='w3-rest'>{name}{!!madeInStep && <sup>{madeInStep}</sup>}</div>
        </li>)}
</ul>

IngredientList.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.shape({
        amount: PropTypes.shape({
            value: PropTypes.number,
            units: PropTypes.string
        }),
        name: PropTypes.string.isRequired,
        madeInStep: PropTypes.number
    }))
}

export default IngredientList
