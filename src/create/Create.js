import React, {useState} from 'react'
import Step from './Step'

export default function Create() {

    const [values, setValues] = useState({
        title: '',
        id: '',
        description: '',
        steps: [],
        source: '',
        yield: '',
        titleImage: ''
    });
    const [successfulSave, setSuccessfulSave] = useState(false)
    const [error, setError] = useState()

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
        console.log(values)
        fetch(`${process.env.REACT_APP_API_URL}/recipes`, {
            method: 'POST',
            body: values
        }).then(response => setSuccessfulSave(true)).catch(e => setError(e))
    }

    return <div>
        <h1>Add a Recipe</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <input required value={values.title}
                           onChange={handleChange('title')}/>
                <input required value={values.id} onChange={handleChange('id')}/>
                <input value={values.source} onChange={handleChange('source')}/>
            </div>
            <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id='description' value={values.description}
                        onChange={handleChange('description')}  rows={4} />
            </div>
            <input value={values.description}
                       onChange={handleChange('description')}/>
            <input value={values.titleImage}
                       onChange={handleChange('titleImage')}/>
            {values.steps.map((step, index) => <Step updateStep={updateStep(index)} {...step} index={index}
                                                     key={index}/>)}
            <button onClick={addStep}>Add Step</button>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
}
