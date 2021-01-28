import React from 'react'
import Step from './Step'
import {Button, FormControl, Input, InputLabel, makeStyles, OutlinedInput, Paper, TextField} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        '& :is(h1, h2, h3, h4, h5)': {
            padding: '1ch'
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    margin: {
        margin: theme.spacing(1),
    }
}));

export default function Create() {

    const classes = useStyles();
    const [values, setValues] = React.useState({
        title: '',
        id: '',
        description: '',
        steps: [],
        source: '',
        yield: '',
        titleImage: ''
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const addStep = () => {
        setValues({...values, steps: values.steps.concat({})});
    }

    const updateStep = index => prop => event => {
        let stepToUpdate = values.steps[index]
        if(event.target.type === 'checkbox'){
            stepToUpdate[prop] = event.target.checked
        }else{
            stepToUpdate[prop] = event.target.value
        }
        let steps = values.steps
        steps[index] = stepToUpdate
        setValues({...values, steps: steps})
    }

    const handleSubmit = e => {
        console.log(e)
    }

    return <Paper className={classes.root}>
        <h1>Add a Recipe</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <TextField label='Title' variant='outlined' required value={values.title}
                           onChange={handleChange('title')}/>
                <TextField label='ID' variant='outlined' required value={values.id} onChange={handleChange('id')}/>
                <TextField label='Source' variant='outlined' value={values.source} onChange={handleChange('source')}/>
            </div>
            <div>
                <FormControl fullWidth variant='outlined'>
                    <InputLabel htmlFor="description">Description</InputLabel>
                    <OutlinedInput
                        id='description' label='Description' labelWidth={60} value={values.description}
                        onChange={handleChange('description')} className={classes.margin} rows={4} multiline/>
                </FormControl>
            </div>
            <TextField label='Yield' variant='outlined' value={values.description}
                       onChange={handleChange('description')}/>
            <TextField label='Title Image URL' variant='outlined' value={values.titleImage}
                       onChange={handleChange('description')}/>
            {values.steps.map((step, index) => <Step updateStep={updateStep(index)} {...step} index={index}
                                                     key={index}/>)}
            <Button onClick={addStep}>Add Step</Button>
            <Button onClick={handleSubmit}>Submit</Button>
        </form>
    </Paper>
}
