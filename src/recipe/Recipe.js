import React, {useState} from 'react';
import './recipe.scss';
import Sidebar from "./sidebar/Sidebar";
import {Route, Switch, useRouteMatch, useParams} from "react-router-dom";
import Title from "./title/Title";
import Step from "./step/Step";
import StepContainer from "./step/StepContainer";

export default function Recipe({title, source, yields, steps, serving, id, titleImage, description}) {
    // let {path, url} = useRouteMatch()
    //Fixme Combine the same things (maybe based on config)
    const mainIngredients = steps.flatMap(step => step.ingredients)
        .filter(it => typeof it !== 'undefined' && typeof it.madeInStep ===
            'undefined');

    // console.log(path)
    // console.log(url)

    return (
        <div className='recipe'>
            <Sidebar titleImage={titleImage} description={description} steps={steps}/>
            <div className='content'>
                <Title title={title} />
                {/*<Switch>*/}
                {/*    <Route exact path={path}>*/}
                {/*        A list of ingredients*/}
                {/*    </Route>*/}
                {/*    <Route path={`${path}/steps/:index`}>*/}
                {/*        <div>test</div>*/}
                {/*        <StepContainer steps={steps}/>*/}
                {/*    </Route>*/}
                {/*</Switch>*/}
            </div>
        </div>
    );
}
