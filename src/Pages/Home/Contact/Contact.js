import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';



const Contact = () => {
    return (
        <div style={{ background: '#08211C' }}>
            <Typography style={{ color: '#58D68D' }} id="transition-modal-title" variant="h6" component="h2">
                CONTACT US
            </Typography>
            <Typography style={{ color: '#2980B9 ' }} id="transition-modal-title" variant="h4" component="h2">
                Always Connect With Us
            </Typography>
            <form>
                <TextField

                    id="outlined-size-small"
                    sx={{ width: '90%', m: 1, }}
                    style={{ backgroundColor: '#F2F7F6', width: '70%', }}
                    size="small"
                    type="email"
                    placeholder="Your Email*"
                    required
                />
                <TextField

                    id="outlined-size-small"
                    sx={{ width: '90%', m: 1 }}
                    style={{ backgroundColor: '#F2F7F6', width: '70%', }}
                    placeholder="Subject*"
                    size="small"
                    required
                />
                <TextField

                    id="outlined-size-small"
                    sx={{ width: '90%', m: 1 }}
                    style={{ backgroundColor: '#F2F7F6', width: '70%', }}
                    placeholder="Message*"
                    size="small"
                    required
                />
                <br />




                <Button type="submit" variant='contained'>Submit</Button>

            </form>
        </div>
    );
};

export default Contact;