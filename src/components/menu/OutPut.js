import React from "react";
import { DataContainer } from "../styled-c/styled-components.js";

export const OutPut = (props) => {
  return (
    <DataContainer>
      <h4 className="dataH">Webs: {props.web}</h4>
      <h4 className="dataH">Numero de pagines: {props.page}</h4>
      <h4 className="dataH">Numero d´idiomes: {props.idioma}</h4>
      <h4 className="dataH">Seo: {props.seo}</h4>
      <h4 className="dataH">Ads: {props.ads}</h4>
      <h4 className="dataH">AQUEST ES EL PREU: {props.preu} LURULUS</h4>
    </DataContainer>
  );
};

