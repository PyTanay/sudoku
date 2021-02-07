import React, { useContext, useEffect } from "react";
import OneRow from "./OneRow";
import "./wholeGrid.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { AppContext } from "../App";

function WholeGrid() {
  const { selected, setSelected, value, setValue, initialValue, timerControls, paused, setPaused } = useContext(AppContext);
  useEffect(() => {
    const changeValue = (e) => {
      if (selected.length !== 0 && selected[0] !== undefined) {
        if (/[1-9]/.test(e.key)) {
          var temp = JSON.parse(JSON.stringify(value)); //this is necessary since we have 2d array and deep copy is needed
          temp[selected[0]][selected[1]] = e.key;
          setValue(temp);
        }
        const tempArr = ["ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"];
        if (tempArr.includes(e.key)) {
          e.preventDefault();
          switch (e.key) {
            case "ArrowUp":
              var uptemp = 1;
              if (selected[0] !== 0) {
                while (initialValue[selected[0] - uptemp][selected[1]] !== null) {
                  selected[0] - uptemp === 0 ? (uptemp = 0) : uptemp++;
                }
              } else {
                uptemp = 0;
              }
              selected[0] !== 0 && setSelected([selected[0] - uptemp, selected[1]]);
              break;
            case "ArrowLeft":
              var lefttemp = 1;
              if (selected[1] !== 0) {
                while (initialValue[selected[0]][selected[1] - lefttemp] !== null) {
                  selected[1] - lefttemp === 0 ? (lefttemp = 0) : lefttemp++;
                }
              } else {
                lefttemp = 0;
              }
              selected[1] !== 0 && setSelected([selected[0], selected[1] - lefttemp]);
              break;
            case "ArrowDown":
              var downtemp = 1;
              if (selected[0] !== 8) {
                while (initialValue[selected[0] + downtemp][selected[1]] !== null) {
                  selected[0] + downtemp === 8 ? (downtemp = 0) : downtemp++;
                }
              } else {
                downtemp = 0;
              }
              selected[0] !== 8 && setSelected([selected[0] + downtemp, selected[1]]);
              break;
            case "ArrowRight":
              var righttemp = 1;
              if (selected[1] !== 8) {
                while (initialValue[selected[0]][selected[1] + righttemp] !== null) {
                  selected[1] + righttemp === 8 ? (righttemp = 0) : righttemp++;
                }
              } else {
                righttemp = 0;
              }
              selected[1] !== 8 && setSelected([selected[0], selected[1] + righttemp]);
              break;
            default:
              break;
          }
        }
        if (e.key === "Delete") {
          var temp1 = value;
          temp1[selected[0]][selected[1]] = null;
          setValue([...temp1]);
        }
        if (e.key === "Escape") {
          setSelected([]);
        }
      }
    };
    document.addEventListener("keydown", changeValue);
    return () => {
      document.removeEventListener("keydown", changeValue);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);
  useEffect(() => {
    if (paused) {
      document.querySelector(".pause-btn").style.display = "initial";
      timerControls.current.pause();
    } else {
      document.querySelector(".pause-btn").style.display = "none";
      timerControls.current.resume();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);
  const clickPlay = () => {
    document.querySelector(".pause-btn").style.display = "none";
    timerControls.current.resume();
    setPaused(!paused);
  };
  return (
    <div className="wholeGrid">
      {[...Array(9)].map((x, index) =>
        index === 2 || index === 5 ? (
          <React.Fragment key={index}>
            <OneRow row={index} />
            <div className="hLine"></div>
          </React.Fragment>
        ) : (
          <OneRow key={index} row={index} />
        )
      )}
      <div className="pause-btn">
        <AiFillPlayCircle className="play-btn" onClick={clickPlay} />
      </div>
    </div>
  );
}

export default WholeGrid;
