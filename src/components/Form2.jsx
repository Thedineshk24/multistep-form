import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';
import HomeMessage from './HomeMessage';
const Form2 = () => {
    return (
        <div>
            <HomeMessage />
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={[]}
                renderInput={(params) => <TextField type="website" {...params} label="Workspace Name" placeholder="Dinesh Katariya" />}
            />
            <br />
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={[]}
                renderInput={(params) => <TextField {...params} label="Workspace Url" placeholder="https://cutshort.io/" />}
            />
        </div>
    )
}

export default Form2