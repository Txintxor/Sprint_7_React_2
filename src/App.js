import React, { useState, useEffect } from "react";
import "./App.css";
import Menu from "./components/menu/Menu.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [preu, setPreu] = useState(0);
  const [extra, setExtra] = useState(0);
  const [page, setPage] = useState(1);
  const [idiom, setIdiom] = useState(1);

  const changeExtra = (e) => {
    e.target.className.includes("numPage")
      ? e.target.id === "plusPage"
        ? setPage(page + 1)
        : page === 1
        ? setPage(1)
        : setPage(page - 1)
      : e.target.id === "plusIdioma"
      ? setIdiom(idiom + 1)
      : idiom === 1
      ? setIdiom(1)
      : setIdiom(idiom - 1);
  };

  useEffect(() => {
    const check = document.querySelector("#web");
    if (check.checked) setPreu(preu - extra);
    page === 1 && idiom === 1 ? setExtra(0) : setExtra(page * idiom * 30);
  }, [page, idiom]);

  useEffect(() => {
    const check = document.querySelector("#web");
    if (check.checked) {
      setPreu(preu + extra);
    }
  }, [extra]);

  // RENDER
  return (
    <div className="App">
      <Menu
        preu={preu}
        page={page}
        idiom={idiom}
        extra={extra}
        changeExtra={changeExtra}
        setPreu={setPreu}
        setPage={setPage}
        setIdiom={setIdiom}
      />
    </div>
  );
}

export default App;
