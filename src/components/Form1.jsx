import React from 'react';
import TextField from '@mui/material/TextField';
import WelcomeMessage from './WelcomeMessage';
const Form1 = () => {
    return (
        <div>
            <WelcomeMessage />
            <label>Full Name</label>
            <TextField fullWidth label="Full Name" placeholder='Dinesh Katariya' />
            <br />
            <br />
            <label>Display Name</label>
            <TextField fullWidth label="Display Name" placeholder='Dinesh' />
        </div>
    )
}

export default Form1