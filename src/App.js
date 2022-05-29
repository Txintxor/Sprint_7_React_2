import React, { useState } from "react";
import "./App.css";
import Menu from "./components/menu/Menu.js";

function App() {
  const [preu, setPreu] = useState(0);
  const [extra, setExtra] = useState(0);
  const [page, setPage] = useState(1);
  const [idiom, setIdiom] = useState(1);

  const sumaPreu = (e) => {
    console.log(extra);
    const ev = document.querySelector(e);
    if (ev !== null) {
      const value = parseInt(ev.value);

      ev.checked
        ? e === "#web"
          ? setPreu(preu + value + extra)
          : setPreu(preu + value)
        : e === "#web"
        ? setPreu(preu - value - extra)
        : setPreu(preu - value);
    }
  };

  const extraWeb = () => {
    const pagina = document.querySelector("#numPag");
    const idioma = document.querySelector("#numIdiom");
    const check = document.querySelector("#web");

    if (pagina.value !== null) setPage(parseInt(pagina.value));
    if (idioma.value !== null) setIdiom(parseInt(idioma.value));
    if (parseInt(pagina.value) === 1 && parseInt(idioma.value) === 1) {
      setExtra(0);
      if (check.checked) setPreu(preu - extra);
    } else {
      setExtra(parseInt(pagina.value) * parseInt(idioma.value) * 30);
      if (check.checked)
        setPreu(preu - extra + parseInt(pagina.value) * parseInt(idioma.value) * 30);
    }
  };

  // RENDER
  return (
    <div className="App">
      <Menu
        extraWeb={extraWeb}
        sumaPreu={sumaPreu}
        preu={preu}
        page={page}
        idiom={idiom}
      />
    </div>
  );
}

export default App;
