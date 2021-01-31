import React, { useEffect, useContext } from "react";
import WholeGrid from "./WholeGrid";
import AllNumSel from "./AllNumSel";
import TimerBox from "./TimerBox";
import { AppContext } from "../App";

function Main({ match }) {
  const { setSelected, setHighlight, setInitialValue, mode, database, setDatabase } = useContext(AppContext);
  useEffect(() => {
    const clickChecker = (e) => {
      if (e.target.classList[0] !== "text1" && e.target.classList[0] !== "text") {
        setSelected([undefined, undefined]);
        setHighlight(null);
      }
    };
    if (match.params.id.toLowerCase() !== "create") {
      if (database.length === 0) {
        fetch("../puzzleList.json", { headers: { "Content-Type": "application/json", Accept: "application/json" } })
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            var tempData = res.database;
            setDatabase(tempData);
            return tempData;
          })
          .then((res) => {
            var tempData = JSON.parse(JSON.stringify(res));
            tempData = tempData.filter((elem) => elem.mode.toLowerCase() === match.params.id.toLowerCase());
            var rand = Math.floor(Math.random() * tempData.length);
            if (rand === tempData.length) rand--;
            console.log(rand);
            setInitialValue(tempData[rand].data);
          })
          .catch((err) => {
            console.log("File could not be loaded for some reason!", err);
          });
      } else {
        var tempData = JSON.parse(JSON.stringify(database));
        tempData = tempData.filter((elem) => elem.mode.toLowerCase() === mode.toLowerCase());
        var rand = Math.floor(Math.random() * tempData.length);
        if (rand === tempData.length) rand--;
        console.log(tempData[rand].data);
        setInitialValue(tempData[rand].data);
      }
    } else {
      setInitialValue(Array(9).fill(Array(9).fill(null)));
    }
    document.addEventListener("click", clickChecker);
    return () => {
      document.removeEventListener("click", clickChecker);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
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
