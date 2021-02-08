import React, { useContext, useEffect } from "react";
import "./homePage.css";
import { Link } from "react-router-dom";
import "./DropDown";
import Dropdown from "./DropDown";
import { AppContext } from "../App";

function HomePage() {
  useEffect(() => {
    fetch("puzzleList.json", { headers: { "Content-Type": "application/json", Accept: "application/json" } })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        var tempData = res.database;
        setDatabase(tempData);
      })
      .catch((err) => {
        console.log("File could not be loaded for some reason!", err);
      });
    setSolution(Array(9).fill(Array(9).fill(null)));
    setSolMatrix(Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => Array.from("123456789"))));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { mode, setMode, setDatabase, setSolution, setSolMatrix } = useContext(AppContext);
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
