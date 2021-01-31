import React, { useContext, useEffect } from "react";
import "./homePage.css";
import { Link } from "react-router-dom";
import "./DropDown";
import Dropdown from "./DropDown";
import { AppContext } from "../App";

function HomePage() {
  useEffect(() => {
    fetch("../puzzleList.json", { headers: { "Content-Type": "application/json", Accept: "application/json" } })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.database.filter((elem) => elem.mode.toLowerCase() === mode.toLowerCase()));
        var temp = res.database.filter((elem) => elem.mode.toLowerCase() === mode.toLowerCase());
        var tempData = {};
        var randSelector = 1;
        if (temp.length === 0) {
          tempData = {};
        } else {
          randSelector = Math.floor(Math.random() * temp.length);
          tempData = temp[randSelector].data;
        }
        // const randSelector=6
        if (tempData !== undefined) {
          console.log(tempData);
          setInitialValue(tempData);
        }
      })
      .catch((err) => {
        console.log("File could not be loaded for some reason!", err);
      });
  }, []);
  const { mode, setMode, setInitialValue } = useContext(AppContext);
  return (
    <div className="homePage">
      <div>
        <img src="sudoku.png" alt="Sudoku-Logo" />
        <div className="dropDown1">
          <Dropdown setMode={setMode} />
        </div>
        <div className="dummyDropDown"></div>
        <Link to={`/main/${mode}`} style={{ textDecoration: "none" }}>
          <div className="btn1">New Game</div>
        </Link>
        <Link to={`/main/create`} style={{ textDecoration: "none" }}>
          <div className="btn1">Create Sudoku</div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
