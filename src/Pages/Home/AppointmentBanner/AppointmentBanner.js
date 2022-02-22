import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Typography, Container } from "@mui/material";

const appointmentBg = {
  background: `url(${bg})`,
  marginTop: 150,
  backgroundColor: "rgba(84, 97, 107,.9)",
  backgroundBlendMode: " darken, luminosity",
};

const AppointmentBanner = () => {
  return (
    <Container>
      <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: 400, marginTop: "-110px" }}
              src={doctor}
              alt=""
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              textAlign: "left",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ mb: 5 }}
                style={{ color: "#78DFCB" }}
              >
                Appointment
              </Typography>
              <Typography variant="h4" style={{ color: "white" }}>
                Make an Appointment Today
              </Typography>
              <Typography
                variant="h6"
                sx={{ my: 5 }}
                style={{ color: "white", fontSize: 14, fontWeight: 300 }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                vitae possimus accusantium. Quos molestiae pariatur magni
                repudiandae laborum sequi qui!
              </Typography>
              <Button
                style={{ backgroundColor: "#78DFCB" }}
                variant="contained"
              >
                LEARN MORE
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AppointmentBanner;
