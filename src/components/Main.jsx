import React, { useEffect, useContext } from "react";
import WholeGrid from "./WholeGrid";
import AllNumSel from "./AllNumSel";
import TimerBox from "./TimerBox";
import { AppContext } from "../App";

function Main({ match }) {
  const { setSelected, setHighlight, setInitialValue, mode } = useContext(AppContext);
  useEffect(() => {
    const clickChecker = (e) => {
      if (e.target.classList[0] !== "text1" && e.target.classList[0] !== "text") {
        setSelected([undefined, undefined]);
        setHighlight(null);
      }
    };
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
    document.addEventListener("click", clickChecker);
    return () => {
      document.removeEventListener("click", clickChecker);
    };
  }, []);
  return (
    <div>
      <div className="iconBar">
        <TimerBox />
      </div>
      <div className="mainGame">
        <WholeGrid />
        <AllNumSel />
        {/* <Utility /> */}
      </div>
    </div>
  );
}

export default Main;
