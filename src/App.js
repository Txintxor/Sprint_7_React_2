import React, { useState, useEffect } from "react";
import "./App.css";
import Menu from "./components/menu/Menu.js"
import { useLocalStorage } from "./components/useLocalStorage";
import "bootstrap/dist/css/bootstrap.min.css";


//ESTOY CON LOCALSTORAGE
function App() {
  const [preu, setPreu] = useState(0);
  const [extra, setExtra] = useState(0);
  const [page, setPage] = useState(1);
  const [idioma, setIdioma] = useState(1);
  // const [web, setWeb] = useState("No");
  // const [seo, setSeo] = useState("No");
  // const [ads, setAds] = useState("No");
  // const [data, setData] = useLocalStorage();

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

   

  // useEffect(() => {
  //   setData(window.localStorage.getItem("data"))
  // }, []);



  //ESTOS SON LOS USEEFFECTS A LOS QUE ME REFIERO
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
      <Menu
        changeExtra={changeExtra}
        setPreu={setPreu}
        setPage={setPage}
        setIdiom={setIdioma}
        // setWeb={setWeb}
        // setSeo={setSeo}
        // setAds={setAds}
        // setLocalStorage={setLocalStorage}
        preu={preu}
        page={page}
        idiom={idioma}
        extra={extra}
        // data={data}
      />
    </div>
  );
}

export default App;
