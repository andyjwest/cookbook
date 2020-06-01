import React from 'react'
import Recipe from './Recipe'
import {MemoryRouter} from "react-router-dom";

export default {
    title: 'Recipe',
    component: Recipe,
}

export const StepOneRoute = ()=> <MemoryRouter initialEntries={['/recipes/key-lime-pie/steps/0']}>
    <Recipe
        title="Key Lime Pie"
        id="key-lime-pie"
        description="Tangy lemons and limes mix makes this pie refreshing and light."
        source="https://www.foodnetwork.com/recipes/key-lime-pie-recipe1-2011840"
        yields="1 9-inch pie"
        steps={[
            {
                'equipment': [
                    'oven'
                ],
                'temperature': {'value':350, 'units':'fahrenheit'},
                'description': 'Preheat the oven to 350 degrees F.'
            },
            {
                'ingredients': [
                    {
                        'name': 'graham crackers',
                        'amount': {
                            'value': 0.3333,
                            'units': '1-pound box'
                        }
                    },
                    {
                        'name': 'melted butter',
                        'amount': {
                            'value': 5,
                            'units': 'tablespoons'
                        }
                    },
                    {
                        'name': 'sugar',
                        'amount': {
                            'value': 0.3333,
                            'units': 'cups'
                        }
                    }
                ],
                'equipment': [
                    'food processor'
                ],
                'description': 'Break up the graham crackers; place in a food processor and process to crumbs. If you don\'t have a food processor, place the crackers in a large plastic bag; seal and then crush the crackers with a rolling pin. Add the melted butter and sugar and pulse or stir until combined.'
            },
            {
                'ingredients': [
                    {
                        'name': 'crust mixture',
                        'madeInStep': 1
                    }
                ],
                'description': 'Press the crust mixture into the bottom and side of a pie pan, forming a neat border around the edge.'
            },
            {
                'equipment': [
                    'oven',
                    'cooling rack'
                ],
                'time': {
                    'value': 8,
                    'units': 'minutes'
                },
                'description': 'Bake the crust until set and golden, 8 minutes. Set aside on a wire rack; leave the oven on.'
            },
            {
                'equipment': [
                    'stand mixer',
                    'stand mixer whisk'
                ],
                'ingredients': [
                    {
                        'name': 'egg yolks',
                        'amount': {
                            'value': 3,
                            'units': 'count'
                        }
                    },
                    {
                        'name': 'lime zest',
                        'amount': {
                            'value': 2,
                            'units': 'teaspoons'
                        }
                    }
                ],
                'time': {
                    'value': 5,
                    'units': 'minutes'
                },
                'priorStepRequired': false,
                'description': 'In an electric mixer with the wire whisk attachment, beat the egg yolks and lime zest at high speed until very fluffy, about 5 minutes.'
            },
            {
                'equipment': [
                    'stand mixer',
                    'stand mixer whisk'
                ],
                'time': {
                    'lowerBound': 3,
                    'upperBound': 4,
                    'units': 'minutes'
                },
                'ingredients': [
                    {
                        'name': 'sweetened condensed milk',
                        'amount': {
                            'value': 14,
                            'units': 'ounces'
                        }
                    }
                ],
                'description': 'Gradually add the condensed milk and continue to beat until thick, 3 or 4 minutes longer.'
            },
            {
                'equipment': [
                    'stand mixer',
                    'stand mixer whisk'
                ],
                'time': {
                    'description': 'until combined'
                },
                'ingredients': [
                    {
                        'name': 'lemons',
                        'amount': {
                            'value': 2,
                            'units': 'count'
                        }
                    },
                    {
                        'name': 'limes',
                        'amount': {
                            'value': 3,
                            'units': 'count'
                        }
                    }
                ],
                'description': 'Lower the mixer speed and slowly add the juice of the lemons and limes, mixing just until combined, no longer.'
            },
            {
                'ingredients': [
                    {
                        'name': 'baked crust',
                        'madeInStep': 3
                    },
                    {
                        'name': 'lime curd',
                        'madeInStep': 6
                    }
                ],
                'description': 'Pour the lime curd into the crust.'
            },
            {
                'time': {
                    'value': 10,
                    'units': 'minutes',
                    'alternative': 'until set'
                },
                'description': 'Bake for 10 minutes, or until the filling has just set.'
            },
            {
                'description': 'Cool on a wire rack, then refrigerate.'
            },
            {
                'ingredients': [
                    {
                        'name': 'heavy whipping cream',
                        'amount': {
                            'value': 1,
                            'units': 'cup'
                        }
                    },
                    {
                        'name': 'confectioners\' sugar',
                        'amount': {
                            'value': 2,
                            'units': 'tablespoons'
                        }
                    }
                ],
                'description': 'Whip the cream and the confectioners\' sugar until nearly stiff.'
            }
        ]}
        serving='Freeze for 15 to 20 minutes before serving. Cut the pie into wedges and serve very cold, topping each wedge with a large dollop of whipped cream.'
        titleImage='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/26/0/BE1B33_Key-Lime-Pie_s4x3.jpg.rend.hgtvcom.826.620.suffix/1386172170553.jpeg'
    />
</MemoryRouter>
