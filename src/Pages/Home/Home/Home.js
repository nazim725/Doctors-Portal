import React from "react";
import Doctors from "../../Doctors/Doctors";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Treatment from "../Treatment/Treatment";

const Home = () => {
  return (
    <div style={{ background: "#033E3E" }}>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <AppointmentBanner></AppointmentBanner>
      <Doctors></Doctors>
      <Treatment></Treatment>
      <Contact></Contact>
    </div>
  );
};

export default Home;
