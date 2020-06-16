import React from 'react'
import {RecipeWelcomeContentPanel} from "./RecipeWelcomeContentPanel";

export default {
    title: 'RecipeWelcomeContentPanel',
    component: RecipeWelcomeContentPanel,
}

export const Everything = () => <RecipeWelcomeContentPanel
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
            'temperature': 350,
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

export const BeefStroganoff = () => <RecipeWelcomeContentPanel
    title="Beef Stroganoff"
    id="beef-stroganoff"
    titleImage="https://static01.nyt.com/images/2020/02/16/magazine/16mag-eat/16mag-eat-articleLarge-v2.jpg"
    source="https://cooking.nytimes.com/recipes/1020862-beef-stroganoff"
    description="Our silky-smooth, delicately textured buttermilk panna cotta is an elegant dessert that requires some waiting but hardly any work. We made it even simpler by skipping the traditional step of sprinkling gelatin over cold water to bloom it before dissolving it in hot cream. Instead, we whisked together the gelatin, sugar, and salt and then whisked in cold heavy cream. Dispersed by the sugar and salt, the gelatin granules had plenty of space to absorb water from the cream, which readied the gelatin for heating. Bringing the mixture to 150 degrees ensured that the gelatin fully dissolved and the floral notes of the vanilla bean were thoroughly infused into the cream. To prevent curdling, we let the mixture cool to 110 degrees before adding the buttermilk. Finally, we portioned the panna cotta and refrigerated it until it was time to serve. Its tangy richness is the perfect foil for a drizzle of honey and a few ripe summer berries."
    steps={[
    {
        "title": "Boil Water",
        "description": "Bring a large pot of salted water to a boil.",
        "ingredients": [
            {
                "name": "Kosher Salt"
            }, {
                "name": "Water"
            }
        ],
        "temperature": "High",
        "equipment": ["large pot"]
    }, {
        "title": "Cut the Meat",
        "description": "Cut the beef against the grain into 1/2-inch slices, pound lightly, then cut those slices into 1-inch-wide strips.",
        "ingredients": [
            {
                "name": "sirloin Roast",
                "amount": {
                    "value": 1.5,
                    "units": "pounds"
                }
            }
        ],
        "equipment": ["knife", "cutting board"]
    }, {
        "title": "Coat the Meat",
        "description": "Add the flour, paprika, salt, and pepper to a large shallow bowl and toss to combine. Dredge the strips of meat in the flour mixture, shake them to remove excess flour, then transfer them to a rimmed baking sheet.",
        "ingredients": [
            {
                "name": "AP Flour",
                "amount": {
                    "value": 2,
                    "units": "tablespoons"
                }
            }, {
                "name": "Hot Paprika",
                "amount": {
                    "value": 1.5,
                    "units": "teaspoons"
                }
            }, {
                "name": "Kosher Salt",
                "amount": {
                    "value": 1.5,
                    "units": "teaspoons"
                }
            }, {
                "name": "Pepper",
                "amount": {
                    "value": 1.5,
                    "units": "teaspoons"
                }
            }, {
                "name": "Sliced Meat",
                "madeInStep": 2
            }
        ],
        "equipment": ["large shallow bowl", "rimmed baking sheet"]
    }, {
        "title": "Cook the Meat",
        "description": "Place a large skillet over high heat and swirl in the oil. When the oil begins to shimmer, sauté the beef slices, in two batches, until they are well browned on both sides but rare inside, 3 to 4 minutes per batch. Transfer the seared meat to the baking sheet. Turn the heat down slightly.",
        "temperature": "High",
        "ingredients": [
            {
                "name": "Canola Oil",
                "amount": {
                    "value": 1,
                    "units": "tablespoon"
                }
            }, {
                "name": "Coated Sliced Meat",
                "madeInStep": 3
            }
        ],
        "equipment": ["large skillet", "wooden spatula"],
        "time": {
            "lowerBound": 3,
            "upperBound": 4,
            "units": "minutes"
        }
    },
    {
        "time": {
            "lowerBound": 12,
            "upperBound": 15,
            "units": "minutes"
        },
        "title": "Cook the Mushrooms",
        "temperature": "Medium-High",
        "description": "Add butter to the pan. When it has melted and started to foam, add the mushrooms, toss to coat them with the fat, and season with salt and pepper. Cook, stirring frequently, until the mushrooms have released their moisture and are a deep, dark brown, 12 to 15 minutes. About halfway into the process, add the sliced shallots and 1 tablespoon butter and stir to combine.",
        "ingredients": [
            {
                "name": "Butter",
                "amount": {
                    "value": 1,
                    "units": "tablespoons"
                }
            }, {
                "name": "Mushrooms",
                "amount": {
                    "value": 0.5,
                    "units": "pounds"
                },
                "preparation": "cut into quarters"
            }, {
                "name": "Kosher Salt"
            }, {
                "name": "Pepper"
            }, {
                "name": "Shallots",
                "amount": {
                    "value": 2,
                    "units": "count"
                },
                "preparation": "thinly sliced"
            }
        ]
    }, {
        "time": {
            "value": 10,
            "units": "minutes"
        },
        "title": "Cook the Noodles",
        "priorStepRequired": false,
        "temperature": "High",
        "description": "While the mushrooms cook, add the noodles to the boiling water, and cook until just done, about 10 minutes. Drain the noodles, and toss with the remaining 2 tablespoons butter. Set aside.",
        "ingredients": [
            {
                "name": "Butter",
                "amount": {
                    "value": 2,
                    "units": "tablespoons"
                }
            }, {
                "name": "Wide Egg Noodles",
                "amount": {
                    "value": 12,
                    "units": "ounces"
                }
            }
        ]
    }, {
        "time": {
            "lowerBound": 2,
            "upperBound": 3,
            "units": "minutes"
        },
        "title": "Combine",
        "temperature": "Medium-High",
        "description": "When the mushrooms and shallots are soft and caramelized, deglaze the pan with the wine, scraping at all the stuck-on bits on the pan’s surface. When the wine has reduced by about half, slowly stir in the cream, followed by the Worcestershire and mustard. Add the meat, along with any accumulated juices, and stir to combine. Cook, stirring occasionally, until the dish is hot and the beef is medium-rare, 2 to 3 minutes. Taste, and adjust the seasonings.",
        "ingredients": [
            {
                "name": "Dry White Wine",
                "amount": {
                    "value": 0.25,
                    "units": "cups"
                }
            }, {
                "name": "Heavy Cream",
                "amount": {
                    "value": 1,
                    "units": "cups"
                }
            }, {
                "name": "Worcestershire sauce",
                "amount": {
                    "value": 1.5,
                    "units": "teaspoons"
                }
            }, {
                "name": "Dijon mustard",
                "amount": {
                    "value": 1.5,
                    "units": "teaspoons"
                }
            }, {
                "name": "Mushrooms and Shallots",
                "madeInStep": 6
            }, {
                "name": "Meat",
                "madeInStep": 4
            }
        ]
    }, {
        "time": {
            "lowerBound": 2,
            "upperBound": 3,
            "units": "minutes"
        },
        "title": "Serve",
        "description": "Serve the noodles under or alongside the stroganoff; sprinkle stroganoff with parsley.",
        "ingredients": [
            {
                "name": "Stroganoff",
                "madeInStep": 7
            }, {
                "name": "Noddles",
                "madeInStep": 5
            }, {
                "name": "Parsley",
                "preparation": "chopped"
            }
        ]
    }
]}
/>
