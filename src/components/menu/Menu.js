import React from "react";
import { Panell, DataContainer, Form, DivContainer } from "../styled-c/styled-components.js";
import Button from "react-bootstrap/Button";

const Menu = (props) => {
  return (
<DivContainer >
<Form id="menuContainer" onSubmit={props.setLocalStorage}>
      <p id="menuTittle">Que vols fer?</p>
      <ul id="menuUl">
        <li className="menuIl">
          <input
            className="preuInput"
            type="checkbox"
            name="web"
            id="web"
            value="500"
            onChange={(e) =>
              e.target.checked
                ? props.setPreu(props.preu + parseInt(e.target.value) + props.extra) && props.setWeb('Si') 
                : props.setPreu(props.preu - parseInt(e.target.value) - props.extra) && props.setWeb('No')
            }
          />
          <label htmlFor="web">Una pagina web (500&#x20AC;)</label>
          <Panell>
            <li className="webIl">
              <label htmlFor="numPag">Número de págines</label>
              <Button
                id="plusPage"
                className="numPage"
                onClick={props.changeExtra}
                variant="info"
              >
                +
              </Button>
              <input
                min="1"
                type="number"
                value={props.page}
                onChange={(e) =>
                  props.setPreu(parseInt(e.target.value) + props.extra)
                }
                name="numPag"
                className="inputWeb"
                id="numPag"
              />
              <Button
                className="numPage"
                onClick={props.changeExtra}
                variant="info"
              >
                -
              </Button>
            </li>
            <li className="webIl">
              <label id="fixLabel" htmlFor="numIdiom">
                Número d´idiomes
              </label>
              <Button
                id="plusIdioma"
                className="numIdioma"
                onClick={props.changeExtra}
                variant="info"
              >
                +
              </Button>
              <input
                min="1"
                type="number"
                value={props.idiom}
                onChange={(e) => props.setPreu(parseInt(e.target.value) + props.extra)}
                name="numIdiom"
                className="inputWeb"
                id="numIdiom"
              />
              <Button
                className="numIdioma"
                onClick={props.changeExtra}
                variant="info"
              >
                -
              </Button>
            </li>
          </Panell>
        </li>
        <li className="menuIl">
          <input
            className="preuInput"
            type="checkbox"
            name="seo"
            id="seo"
            value="300"
            onChange={(e) =>
              e.target.checked
                ? props.setPreu(props.preu + parseInt(e.target.value)) && props.setSeo('Si')
                : props.setPreu(props.preu - parseInt(e.target.value)) && props.setSeo('No')
            }
          />
          <label htmlFor="seo">Una consultoria SEO (300&#x20AC;)</label>
        </li>
        <li className="menuIl">
          <input
            className="preuInput"
            type="checkbox"
            name="ads"
            id="ads"
            value="200"
            onChange={(e) =>
              e.target.checked
                ? props.setPreu(props.preu + parseInt(e.target.value)) && props.setAds('Si')
                : props.setPreu(props.preu - parseInt(e.target.value)) && props.setAds('No')
            }
          />
          <label htmlFor="ads">Una campanya de Google Ads (200&#x20AC;)</label>
        </li>
      </ul>
      <p id="pResult">Preu: {props.preu}&#x20AC;</p>
    <Button variant="info" type="submit">
      Submit
    </Button>
    </Form>
    <DataContainer >
      <h4 className="dataH">
        Webs: {props.data} 
      </h4>
      <h4 className="dataH">
        Numero de pagines: {props.data} 
      </h4>
      <h4 className="dataH">
        Numero d´idiomes: {props.data} 
      </h4>
      <h4 className="dataH">
        Seo: {props.data} 
      </h4>
      <h4 className="dataH">
        Ads: {props.data} 
      </h4>
      <h4 className="dataH">
        AQUEST ES EL PREU: {props.data} LURULUS
      </h4>
    </DataContainer>
</DivContainer>
  );
};

export default Menu;
