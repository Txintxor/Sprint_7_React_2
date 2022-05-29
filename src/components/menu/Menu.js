import React from 'react';
import {Panell} from '../styled-c/styled-components.js'

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
            onChange={() =>(props.sumaPreu('#web'))}
          />
          <label htmlFor="web">Una pagina web (500&#x20AC;)</label>
          <Panell >
            <li className="webIl">
              <label htmlFor="numPag">Número de págines</label>
              <input min="0" type="number" value = {props.page} onChange={props.extraWeb} name="numPag" id="numPag" />
            </li>
            <li className="webIl">
              <label htmlFor="numIdiom">Número d´idiomes</label>
              <input min="0" type="number" value = {props.idiom} onChange={props.extraWeb} name="numIdiom" id="numIdiom" />
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
            onChange={() =>(props.sumaPreu('#seo'))}
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
            onChange={() =>(props.sumaPreu('#ads'))}
          />
          <label htmlFor="ads">Una campanya de Google Ads (200&#x20AC;)</label>
        </li>
      </ul>
      <p id="pResult">Preu: {props.preu}&#x20AC;</p>
    </form>
  );
};

export default Menu;
