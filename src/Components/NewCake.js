
import { Box, Container, TextField, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'

export default function NewCake({ onAddNewCake }) {

    const newCakeInitial = {
        title: '',
        image: '',
        previewDescription: '',
        detailDescription: ''
    }

    const [errors, setErrors] = useState({})

    const [newCake, setNewCake] = useState(newCakeInitial)

    let history = useHistory()

    const validation = () => {
        let temp = {}
        temp.title = newCake.title ? '' : "This field is required"
        temp.img = newCake.image ? '' : "This field is required"
        temp.previewDescription = newCake.previewDescription ? '' : "This field is required"
        temp.detailDescription = newCake.detailDescription ? '' : "This field is required"
        setErrors({
            ...temp
        })

        return Object.values(temp).every(x => x === '')
    }

    function handleSubmit() {
       
        if(validation()) {
           onAddNewCake(newCake)
           setNewCake(newCakeInitial)
           history.push('/products')
        }
    }

    function generateTextField(l,v,name,error = null) {
        return <TextField
            fullWidth
            id={'standard-basic'}
            label={l}
            variant={'standard'}
            multiline
            name={name}
            value={v}
            onChange={(e) => handleInput(e)}
            required = {true}
            // error 
            // helperText = "some error"
            // helperText = {error ? error.message : null}
            {...(error && {error:true, helperText:error})}
        />
    }

    function handleInput(e) {
        setNewCake({
            ...newCake, 
            [e.target.name] : e.target.value
        })
    }
    return (
        <Container maxWidth='md' >
            <h1>Add your cake</h1>
            <Box component='form' onSubmit={handleSubmit}>
                <div>

                    {generateTextField('Name ...', newCake.title, 'title', errors.title)}

                    {generateTextField('Image URL ...', newCake.image, 'image', errors.img)}

                    {generateTextField('Preview Description ...', newCake.previewDescription, 'previewDescription', errors.previewDescription)}

                    {generateTextField('Full Description...', newCake.detailDescription, 'detailDescription', errors.detailDescription)}

                </div>
                <Button sx={{marginTop: 3, width: 100}} variant='outlined' onClick={handleSubmit}>ADD</Button>
            </Box>
        </Container>
    )
}
