import React from 'react';

export default function Step({equipment, temperature, description, ingredients, time, priorStepRequired}) {
    return (
        <div className='step'>
            <div>{!!ingredients && <div>
                {ingredients.map(ingredient => <Ingredients {...ingredient} />)}</div>}</div>
            <div>{description}</div>
            <div>
                {!!equipment && <div>
                    {equipment.map(it => <div>{it}</div>)}
                </div>}
                {!!temperature && <div>Temp: {temperature}</div>}
                {!!time && <div>Time: {time && `${time.value} ${time.units}`}</div>}
            </div>
        </div>
    );
}

const Ingredients = ({name, amount, madeInStep}) => <div>
    <div>{!!amount && `${amount.value} ${amount.units} `}{name} {!!madeInStep &&
    <sup className='madeInStep'>{madeInStep}</sup>}</div>
</div>;