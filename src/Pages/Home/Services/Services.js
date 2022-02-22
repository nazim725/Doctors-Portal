import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Typography from "@mui/material/Typography";

const Services = () => {
  const services = [
    {
      name: "Fluoride Treatment",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error excepturi accusantium, tempore magnam, porro dolorem animi enim consequuntur nobis, qui dicta tenetur cumque quis voluptatibus doloribus illo. Distinctio, alias ea!",
      img: fluoride,
    },
    {
      name: "Cavity Filling",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error excepturi accusantium, tempore magnam, porro dolorem animi enim consequuntur nobis, qui dicta tenetur cumque quis voluptatibus doloribus illo. Distinctio, alias ea!",
      img: cavity,
    },
    {
      name: "Teeth whitening ",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error excepturi accusantium, tempore magnam, porro dolorem animi enim consequuntur nobis, qui dicta tenetur cumque quis voluptatibus doloribus illo. Distinctio, alias ea!",
      img: whitening,
    },
  ];
  return (
    <Container>
      <Typography sx={{ fontWeight: 500, m: 5 }} variant="h4" component="div">
        Services We Provide
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
