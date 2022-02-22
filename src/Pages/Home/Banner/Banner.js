import React from "react";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography, Button, Container } from "@mui/material";

const Banner = () => {
  const bannerBg = {
    background: `url(${bg})`,
  };

  const verticalCenter = {
    display: "flex",
    alignItems: "center",
    height: 400,
  };
  return (
    <div style={{ marginTop: "60px" }}>
      <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            style={{ ...verticalCenter, textAlign: "left" }}
          >
            <Box>
              <Typography variant="h3">
                Your New Smile <br />
                Starts Here
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 13, color: "gray", fontWeight: 300, my: 3 }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                autem cumque harum sed placeat praesentium delectus officiis ea
                obcaecati molestias.
              </Typography>
              <Button
                style={{ backgroundColor: "#78DFCB" }}
                variant="contained"
              >
                {" "}
                Get Appointment
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} style={verticalCenter}>
            <img style={{ width: "350px" }} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
