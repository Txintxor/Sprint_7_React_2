import React from "react";
import { Panell } from "../styled-c/styled-components.js";
import Button from "react-bootstrap/Button";

const Menu = (props) => {
  return (
    <form id="menuContainer">
      <p id="menuTittle">Que vols fer?</p>
      <ul id="menuUl">
        <li className="menuIl">
          <input
            className="preuInput"
            type="checkbox"
            name="web"
            id="web"
            value="500"
            onChange={props.checkWeb}
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
                onChange={props.extraWeb}
                name="numPag"
                className="inputWeb"
                id="numPag"
              />
              <Button
                className="numPage"
                onClick={props.changeExtra}
                variant="info"
              >
                {" "}
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
                onChange={props.extraWeb}
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
            onChange={() => props.sumaPreu("#seo")}
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
            onChange={() => props.sumaPreu("#ads")}
          />
          <label htmlFor="ads">Una campanya de Google Ads (200&#x20AC;)</label>
        </li>
      </ul>
      <p id="pResult">Preu: {props.preu}&#x20AC;</p>
    </form>
  );
};

export default Menu;
