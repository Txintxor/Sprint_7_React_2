import React, { useState, useEffect } from "react";
import "./App.css";
import Menu from "./components/menu/Menu.js";
import {
  DataContainer,
  DivContainer,
} from "./components/styled-c/styled-components.js";

import "bootstrap/dist/css/bootstrap.min.css";

//ESTOY CON LOCALSTORAGE
function App() {
  const [preu, setPreu] = useState(0);
  const [extra, setExtra] = useState(0);
  const [page, setPage] = useState(1);
  const [idioma, setIdioma] = useState(1);
  const [web, setWeb] = useState("No");
  const [seo, setSeo] = useState("No");
  const [ads, setAds] = useState("No");
  const [object, setObject] = useState({
      web: '', 
      page: '',
      idiom: '',
      seo: '', 
      ads: '', 
      preu: ''
    })
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
  
  useEffect(() => {
    setData(window.localStorage.getItem("data"));
    setObject(JSON.parse(data))
    
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

  // RENDER
  return (
    <div className="App">
      <DivContainer>
        <Menu
          changeExtra={changeExtra}
          setPreu={setPreu}
          setPage={setPage}
          setIdiom={setIdioma}
          setWeb={setWeb}
          setSeo={setSeo}
          setAds={setAds}
          setLocalStorage={setLocalStorage}
          preu={preu}
          page={page}
          idiom={idioma}
          extra={extra}
          data={data}
        />
        <DataContainer>
          <h4 className="dataH">Webs: {object.web}</h4>
          <h4 className="dataH">Numero de pagines: {object.page}</h4>
          <h4 className="dataH">Numero d´idiomes: {object.idioma}</h4>
          <h4 className="dataH">Seo: {object.seo}</h4>
          <h4 className="dataH">Ads: {object.ads}</h4>
          <h4 className="dataH">AQUEST ES EL PREU: {object.preu} LURULUS</h4>
        </DataContainer>
      </DivContainer>
    </div>
  );
}

export default App;
