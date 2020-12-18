import React from 'react';
import * as PropTypes from 'prop-types'
import './ingredient-list.scss'
import Amount from '../components/Amount/Amount';

const IngredientList = ({ingredients}) => <div className='ingredient-list'>
    {!!ingredients && ingredients.map(({amount, name, madeInStep}) =>
        <>
            {amount && <Amount units={amount.units} value={amount.value}/>}
            <div>{name}{!!madeInStep && <sup>{madeInStep}</sup>}</div>
        </>)}
</div>

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
