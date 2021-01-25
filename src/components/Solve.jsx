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
    const methodA = (startPoint) => {
      var temp = JSON.parse(JSON.stringify(startPoint));
      var tempSol=Array(9).fill([])
      solMatrix.forEach((row, rowIndex) => {
        var tempSol2=[];
        row.forEach((col, colIndex) => {
          var filtRow = temp[rowIndex].filter((elem) => elem !== null);
          var filtColumn = getCol(temp, colIndex).filter((elem) => elem !== null);
          var filtBlock = getBlock(temp, getBlockAddress([rowIndex, colIndex])).filter((elem) => elem !== null);
          var tempCell = col.filter((elem) => !filtRow.includes(elem));
          tempCell = tempCell.filter((elem) => !filtColumn.includes(elem));
          tempCell = tempCell.filter((elem) => !filtBlock.includes(elem));
          tempSol2.push(JSON.parse(JSON.stringify(tempCell)))
          if (tempCell.length === 1 && temp[rowIndex][colIndex] === null) {
            temp[rowIndex][colIndex] = tempCell[0];
          }
        });
        tempSol[rowIndex]=JSON.parse(JSON.stringify(tempSol2));
      });
      // console.log(tempSol)
      tempSol.forEach(elem=>findUnique(elem))
      return temp;
    };
    const findUnique = (arr1) => {
      var ret = JSON.parse(JSON.stringify(arr1));
      var temp=[];
      ret.forEach(elem=>elem.forEach(ele=>temp.push(ele)))
      console.log(temp.filter(elem=>temp.filter(e=>e===elem).length===1))
      ret.map(elem=>elem.filter(elem1=>temp.filter(elem2=>elem2===elem1).length===1))
      return ret;
    };
    setValue(methodA(value));
  };
  return (
    <button className="btn" onClick={solveSudoku}>
      <VscSettingsGear /> Solve
    </button>
  );
}

export default Solve;
