import { Grid, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const Doctor = ({ doctor }) => {
  const { name, image, email } = doctor;
  return (
    <Grid item xs={12} sm={6} md={4} style={{ marginTop: "40px" }}>
      <Card sx={{ Width: 345 }} style={{ background: "#306754" }}>
        <CardActionArea>
          {/* <CardMedia
            component="img"
            height="300"
            image={`data:image/png;base64,${image}`}
            alt="green iguana"
          /> */}
          <img
            src={`data:image/png;base64,${image}`}
            style={{ marginTop: "10px", border: "5px solid #806517" }}
            width="300"
            height="250"
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {email}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Doctor;
