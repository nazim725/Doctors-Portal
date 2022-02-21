import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Doctor from "./Doctor/Doctor";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  console.log(doctors.length);
  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          {doctors.map((doctor) => (
            <Doctor doctor={doctor} key={doctor._id}></Doctor>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Doctors;
