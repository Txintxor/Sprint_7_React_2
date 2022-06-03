import React, { useState, useEffect } from "react";
// import {OutPut} from "./OutPut.js";
import {
  Panell,
  Form,
  DivContainer,
  DataContainer,
} from "../styled-c/styled-components.js";
//NO SÉ POR QUÉ HA DEJADO DE FUNCIONAR BOOTSTRAP
import Button from "react-bootstrap/Button";

const Menu = () => {
  const [preu, setPreu] = useState(0);
  const [extra, setExtra] = useState(0);
  const [page, setPage] = useState(1);
  const [idioma, setIdioma] = useState(1);
  const [web, setWeb] = useState("No");
  const [seo, setSeo] = useState("No");
  const [ads, setAds] = useState("No");
  const [object, setObject] = useState("");
  const [data, setData] = useState(window.localStorage.getItem("data"));

  const changeExtra = (e) => {
    e.target.className.includes("numPage")
      ? e.target.id === "plusPage"
        ? setPage(page + 1)
        : page === 1
        ? setPage(1)
        : setPage(page - 1)
      : e.target.id === "plusIdioma"
      ? setIdioma(idioma + 1)
      : idioma === 1
      ? setIdioma(1)
      : setIdioma(idioma - 1);
  };

  const setLocalStorage = () => {
    const pressupost = {
      web: web,
      page: page,
      idioma: idioma,
      seo: seo,
      ads: ads,
      preu: preu,
    };

    window.localStorage.setItem("data", JSON.stringify(pressupost));
  };

  //LOS USEEFFECTS A LOS QUE ME REFERÍA, NO TENGO CLARO QUE LO ESTÉ HACIENDO BIEN
  //SERÍA MEJOR USAR ADDEVENTLISTENER?

  useEffect(() => {
    setData(window.localStorage.getItem("data"));
    data ? setObject(JSON.parse(data)) : setObject({
      web: "No",
      page: "0",
      idioma: "0",
      seo: "No",
      ads: "No",
      preu: "0",
    }) ;
  }, []);

  useEffect(() => {
    const check = document.querySelector("#web");
    if (check.checked) setPreu(preu - extra);
    page === 1 && idioma === 1 ? setExtra(0) : setExtra(page * idioma * 30);
  }, [page, idioma]);

  useEffect(() => {
    const check = document.querySelector("#web");
    if (check.checked) {
      setPreu(preu + extra);
    }
  }, [extra]);
  return (
    <DivContainer>
      <Form id="menuContainer" onSubmit={setLocalStorage}>
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
                  ? (setPreu(preu + parseInt(e.target.value) + extra),
                    setWeb("Si"))
                  : (setPreu(preu - parseInt(e.target.value) - extra),
                    setWeb("No"))
              }
            />
            <label htmlFor="web">Una pagina web (500&#x20AC;)</label>
            <Panell>
              <li className="webIl">
                <label htmlFor="numPag">Número de págines</label>
                <Button
                  id="plusPage"
                  className="numPage"
                  onClick={changeExtra}
                  variant="info"
                >
                  +
                </Button>
                <input
                  min="1"
                  type="number"
                  value={page}
                  onChange={(e) => setPreu(parseInt(e.target.value) + extra)}
                  name="numPag"
                  className="inputWeb"
                  id="numPag"
                />
                <Button
                  className="numPage"
                  onClick={changeExtra}
                  variant="info"
                >
                  -
                </Button>
              </li>
              <li className="webIl">
                <label id="fixLabel" htmlFor="numIdioma">
                  Número d´idiomes
                </label>
                <Button
                  id="plusIdioma"
                  className="numIdioma"
                  onClick={changeExtra}
                  variant="info"
                >
                  +
                </Button>
                <input
                  min="1"
                  type="number"
                  value={idioma}
                  onChange={(e) => setPreu(parseInt(e.target.value) + extra)}
                  name="numIdioma"
                  className="inputWeb"
                  id="numIdioma"
                />
                <Button
                  className="numIdioma"
                  onClick={changeExtra}
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
                  ? (setPreu(preu + parseInt(e.target.value)), setSeo("Si"))
                  : (setPreu(preu - parseInt(e.target.value)), setSeo("No"))
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
                  ? (setPreu(preu + parseInt(e.target.value)), setAds("Si"))
                  : (setPreu(preu - parseInt(e.target.value)), setAds("No"))
              }
            />
            <label htmlFor="ads">
              Una campanya de Google Ads (200&#x20AC;)
            </label>
          </li>
        </ul>
        <p id="pResult">Preu: {preu}&#x20AC;</p>
        <Button variant="info" type="submit">
          Submit
        </Button>
      </Form>
      <DataContainer>
        <h4 className="dataH">Webs: {object.web}</h4>
        <h4 className="dataH">Numero de pagines: {object.page}</h4>
        <h4 className="dataH">Numero d´idiomes: {object.idioma}</h4>
        <h4 className="dataH">Seo: {object.seo}</h4>
        <h4 className="dataH">Ads: {object.ads}</h4>
        <h4 className="dataH">AQUEST ES EL PREU: {object.preu} LURULUS</h4>
      </DataContainer>
    </DivContainer>
  );
};

export default Menu;
