import React from 'react';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png'
import { Typography, Button, Container, Box } from '@mui/material';

const Treatment = () => {
    return (

        <Container>


            <Grid sx={{ mt: 5 }} container spacing={2}>
                <Grid item xs={12} md={6}>

                    <img src={treatment} alt="" width="100%" style={{height:'300px'}} />

                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant='h4' sx={{ mt: 2 }}>
                            Exceptional Dental Care, On <br /> Your Terms

                        </Typography>
                        <Typography variant='h6' sx={{ mt: 2, mb: 2 }} style={{ fontSize: '12px', textAlign: 'left' }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam maiores numquam neque voluptatibus a cupiditate officiis amet quas, ratione ipsam molestias maxime quidem. Delectus nam repellendus at expedita sequi voluptates tempore natus quidem eum consequuntur! Quibusdam iste maxime officiis similique distinctio cumque assumenda id provident ullam non totam voluptatum enim, itaque nemo eaque cupiditate fugiat corrupti, natus maiores obcaecati numquam adipisci soluta accusamus! Quod similique cupiditate

                        </Typography>

                        <Button style={{ backgroundColor: '#78DFCB' }} variant="contained">LEARN MORE</Button>
                    </Box>

                </Grid>

            </Grid>

        </Container>
    );
};

export default Treatment;