import React, { useState } from 'react';
import { TextField, Button, Alert } from '@mui/material';

const MakeAdmin = () => {

    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    e.target.reset()
                    setSuccess(true)

                }
            })

        e.preventDefault()
    }

    return (
        <div>
            <h2>Make ADMIN</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    type="email"
                    onBlur={handleOnBlur} /> <br />
                <Button type="submit" sx={{ mt: 3, width: '50%' }} variant="contained">Make Admin</Button>
                {
                    success && <Alert severity="success"> Make Admin Successfully</Alert>
                }


            </form>
        </div>
    );
};

export default MakeAdmin;