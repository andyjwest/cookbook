import { LoremIpsum } from "lorem-ipsum";

function getRandomInt(max, min = 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

export const generateRandomStep = () => ({
    title: lorem.generateWords(getRandomInt(5)),
    description: lorem.generateSentences(getRandomInt(10)),
    ingredients: generateRandomIngredients(getRandomInt(10)),
    temperature: generateRandomTemp(),
    equipment: generateRandomEquipment(),
    time: generateRandomTime(),
    priorStepRequired: [true, false][getRandomInt(1)]
})

export const generateRandomTime = () => ({
    value: getRandomInt(50, 10),
    units: ['minutes', 'seconds'][getRandomInt(1)]
})

export const generateRandomEquipment = (count = getRandomInt(10)) => {
    if(count === 0){
        return undefined
    }
    return Array.from(Array(count)).map(it => lorem.generateWords(getRandomInt(3, 1)))
}


export const generateRandomTemp = ()=> ({
    value: getRandomInt(500, 100),
    units: ['Celsius', 'Fahrenheit'][getRandomInt(1)]
})

//TODO have this do 0s as well
export const generateRandomIngredients = (count = getRandomInt(10, 1)) => Array.from(Array(count)).map((x, i) => generateRandomIngredient())

export const generateRandomIngredient = () => {
    return {
        name: lorem.generateWords(getRandomInt(5)),
        amount: {
            value: getRandomInt(1000),
            units: units[getRandomInt(13)]
        }
    }
}

export const units = ['teaspoons', 'tablespoons', 'fluid ounces', 'pints', 'quarts', 'gallons', 'milliliters', 'liters',
    'pounds', 'ounces', 'grams', 'cups', 'count']