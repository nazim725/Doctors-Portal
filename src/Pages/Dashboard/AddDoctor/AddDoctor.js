import { Input, TextField,Button } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit=e=>{
        e.preventDefault();
        if(!image){
            return;
        }
        const formData=new FormData();
        formData.append('name',name)
        formData.append('email',email)
        formData.append('image',image)
        fetch('http://localhost:5000/doctors',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })

    }
    return (
        <div>
        <h3>Add A Doctor</h3>
        <form onSubmit={handleSubmit}>
            <TextField
                sx={{ width: '50%' }}
                label="Name"
                required
                onChange={e => setName(e.target.value)}
                variant="standard" />
            <br />
            <TextField
                sx={{ width: '50%' }}
                label="Email"
                type="email"
                required
                onChange={e => setEmail(e.target.value)}
                variant="standard" />
            <br />
            <Input
                accept="image/*"
                type="file"
                onChange={e => setImage(e.target.files[0])}
            />
            <br />
            <Button variant="contained" type="submit">
                Add Doctor
            </Button>
        </form>
     
    </div>
    );
};

export default AddDoctor;