import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';
import WelcomeMessage from './WelcomeMessage';
const Form1 = () => {
    return (
        <div>
            <WelcomeMessage />
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={["Dinesh"]}
                renderInput={(params) => <TextField {...params} label="Full Name" placeholder="Dinesh Katariya" />}
            />
            <br />
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={[]}
                renderInput={(params) => <TextField {...params} label="DisPlay Name" placeholder="Dinesh" />}
            />
        </div>
    )
}

export default Form1