import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import HomeMessage from './HomeMessage';
const Form2 = () => {
    return (
        <div>
            <HomeMessage />
            <label>Workspace Name</label>
            <TextField fullWidth label="Workspace Name" placeholder='Dinesh' />
            <br />
            <br />
            <label>Workspace URL</label>
            <TextField fullWidth label="Workspace URL" placeholder='https://cutshort.io/' />
        </div>
    )
}

export default Form2