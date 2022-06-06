import React from "react";
import { DivContainer, DataContainer } from "../styled-c/styled-components";
import Button from "react-bootstrap/Button";


const Budget = (props) => {
  const object = window.localStorage.getItem(props.budgetName);
  return (
    <DivContainer>
      <DataContainer>
        <h4 className="dataH">Nom: {object.name}</h4>
        <h4 className="dataH">Pressupost: {object.budgetName}</h4>
        <h4 className="dataH">Data: {object.date}</h4>
        <h4 className="dataH">Webs: {object.web}</h4>
        <h4 className="dataH">Numero de pagines: {object.page}</h4>
        <h4 className="dataH">Numero d´idiomes: {object.idioma}</h4>
        <h4 className="dataH">Seo: {object.seo}</h4>
        <h4 className="dataH">Ads: {object.ads}</h4>
        <h4 className="dataH">AQUEST ES EL PREU: {object.preu} LURULUS</h4>
      </DataContainer>
      <Button variant="info" href="./menu">Torna a la pagina de productes</Button>
    </DivContainer>
  );
};

export default Budget;
