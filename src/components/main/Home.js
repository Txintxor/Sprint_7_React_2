import React from "react";
import Button from "react-bootstrap/Button";
import { DivHomeContainer } from "../styled-c/styled-components";

const HomeContainer = (props) => {
  return (
    <DivHomeContainer>
      <h1 style={{ marginBottom: "2rem" }}>
        Benvinguts a Serveis Informàtics Quintillà
      </h1>
      <Button variant="info" href="./menu">
        Prem-hi aquí per entrar la pagina de selecció de serveis
      </Button>
    </DivHomeContainer>
  );
};

export default HomeContainer;
