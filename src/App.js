import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Popup from "react-popup";
import "./components/popUp.css";
import HomePage from "./components/HomePage";
import Main from "./components/Main";
// import SingleBox from './components/SingleBox';
// import OneRow from './components/OneRow';
// import WholeGrid from "./components/WholeGrid";
// import NumberSelector from './components/NumberSelector';
// import AllNumSel from "./components/AllNumSel";
// import Utility from './components/Utility';
// import TimerBox from "./components/TimerBox";

export const AppContext = React.createContext();

function App() {
  const [selected, setSelected] = useState([undefined, undefined]);
  const [value, setValue] = useState(Array(9).fill(Array(9).fill(null)));
  const [initialValue, setInitialValue] = useState(Array(9).fill(Array(9).fill(null)));
  const [solution, setSolution] = useState(Array(9).fill(Array(9).fill(null)));
  const [displayError, setDisplayError] = useState(false);
  const [path, setPath] = useState([]);
  const [mode, setMode] = useState("medium");
  const [highlight, setHighlight] = useState(null);
  const [database, setDatabase] = useState([]);
  const [solMatrix, setSolMatrix] = useState(
    Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => Array.from("123456789")))
  );
  const timerControls = useRef({});
  const timeValue = useRef({ hour: 0, min: 0, sec: 0 });

  useEffect(() => {
    if (initialValue.length > 0) setValue([...initialValue]);
  }, [initialValue]);
  const getCol = (matrix, col) => {
    var tempCol = [];
    matrix.forEach((elem) => {
      tempCol.push(elem[col]);
    });
    return tempCol;
  };
  const getBlock = (matrix, blockAddress) => {
    var tempBlock = [];
    matrix.forEach((elem, index) => {
      if (index < blockAddress[0] * 3 && index >= (blockAddress[0] - 1) * 3) {
        tempBlock.push(...elem.slice((blockAddress[1] - 1) * 3, blockAddress[1] * 3));
      }
    });
    return tempBlock;
  };
  const getBlockAddress = (address) => {
    var tempRow = Math.floor(address[0] / 3 + 1);
    var tempCol = Math.floor(address[1] / 3 + 1);
    return [tempRow, tempCol];
  };

  const providerValue = {
    selected,
    setSelected,
    setInitialValue,
    value,
    setValue,
    getCol,
    getBlock,
    getBlockAddress,
    initialValue,
    solution,
    setSolution,
    path,
    setPath,
    displayError,
    setDisplayError,
    Popup,
    timerControls,
    timeValue,
    highlight,
    setHighlight,
    mode,
    setMode,
    database,
    setDatabase,
    solMatrix,
    setSolMatrix,
  };

  return (
    <div className="App">
      <Router>
        <Popup />
        {document.getElementById("popupContainer")}
        <AppContext.Provider value={providerValue}>
          <div className="appHeader">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <h1 className="title">Sudoku</h1>
            </Link>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/main/:id" exact component={Main} />
          </Switch>
        </AppContext.Provider>
      </Router>
    </div>
  );
}

export default App;
