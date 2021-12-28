import React from "react";
import styled from "styled-components";
import "./css/home.css";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="order online for touchless delivery"
        backgroundImg="model-s.jpg"
        leftBtn="Customer Order"
        rightBtn="existing inventory"
      />
      <Section
        title="Model Y"
        description="order online for touchless delivery"
        backgroundImg="model-y.jpg"
        leftBtn="Customer Order"
        rightBtn="existing inventory"
      />
      <Section
        title="Model 3"
        description="order online for touchless delivery"
        backgroundImg="model-3.jpg"
        leftBtn="Customer Order"
        rightBtn="existing inventory"
      />
      <Section
        title="Model X"
        description="order online for touchless delivery"
        backgroundImg="model-x.jpg"
        leftBtn="Customer Order"
        rightBtn="existing inventory"
      />
      <Section
        title="lowest cost solar panels in america"
        description="money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtn="Order now"
        rightBtn="learn more"
      />
      <Section
        title="solar for new roofs"
        description="solar roof costs less than a new panel"
        backgroundImg="solar-roof.jpg"
        leftBtn="Order now"
        rightBtn="learn more"
      />
      <Section
        title="accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtn="Shop now"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100vw;
`;
