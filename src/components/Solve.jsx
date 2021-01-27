import React, { useContext } from "react";
import { VscSettingsGear } from "react-icons/vsc";
import { AppContext } from "../App";

function Solve() {
  const { value, setValue, setSolution, initialValue, getCol, getBlock, getBlockAddress } = useContext(AppContext);
  const solveSudoku = () => {
    console.log("solving");
    var solMatrix = Array(9).fill(Array(9).fill([...Array(10).keys()].slice(1).map((elem) => elem.toString())));
    //there are two solution methods and in order to solve sudoku both method needs to be implemented mulltiple times
    //methodA --> checks the cell against row column and blocks and figures which solutions are possible for the cell
    //methodB --> checks the cell solutions based on the other for related blocks
    const methodA = (startPoint, initial) => {
      var temp = JSON.parse(JSON.stringify(startPoint));
      var tempSol=Array(9).fill(Array(9))
      solMatrix.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
          var filtRow = temp[rowIndex].filter((elem) => elem !== null);
          var filtColumn = getCol(temp, colIndex).filter((elem) => elem !== null);
          var filtBlock = getBlock(temp, getBlockAddress([rowIndex, colIndex])).filter((elem) => elem !== null);
          var tempCell = col.filter((elem) => !filtRow.includes(elem));
          tempCell = tempCell.filter((elem) => !filtColumn.includes(elem));
          tempCell = tempCell.filter((elem) => !filtBlock.includes(elem));
          if (tempCell.length === 1 && temp[rowIndex][colIndex] === null) {
            temp[rowIndex][colIndex] = tempCell[0];
          }
        });
      });
      return temp;
    };
    const findUnique = (arr1) => {
      var ret = [];
      var temp=[];
      ret.forEach(elem=>elem.forEach(ele=>temp.push(ele)))
      console.log(temp)
      return ret;
    };
    setValue(methodA(value, initialValue));
  };
  return (
    <button className="btn" onClick={solveSudoku}>
      <VscSettingsGear /> Solve
    </button>
  );
}

export default Solve;
