import React, { useContext } from "react";
import { VscSettingsGear } from "react-icons/vsc";
import { AppContext } from "../App";

function Solve() {
  const { value, setValue, initialValue, getCol, getBlock, getBlockAddress } = useContext(AppContext);
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
          if(initialValue[rowIndex][colIndex]===null){
            var filtRow = temp[rowIndex].filter((elem) => elem !== null);
            var filtColumn = getCol(temp, colIndex).filter((elem) => elem !== null);
            var filtBlock = getBlock(temp, getBlockAddress([rowIndex, colIndex])).filter((elem) => elem !== null);
            var tempCell = col.filter((elem) => !filtRow.includes(elem));
            tempCell = tempCell.filter((elem) => !filtColumn.includes(elem));
            tempCell = tempCell.filter((elem) => !filtBlock.includes(elem));
          }else{
            tempCell=[initialValue[rowIndex][colIndex]]
          }
          tempSol2.push(JSON.parse(JSON.stringify(tempCell)))
          if (tempCell.length === 1 && temp[rowIndex][colIndex] === null) {
            temp[rowIndex][colIndex] = tempCell[0];
          }
        });
        tempSol[rowIndex]=JSON.parse(JSON.stringify(tempSol2));
      });
      console.log(tempSol)
      tempSol.forEach((row,rowIndex)=>row.forEach((col,colIndex)=>{
        var crossRef=findUniqueFromMatrix(col,tempSol,rowIndex,colIndex)
        if(crossRef!==null && temp[rowIndex][colIndex]===null){
          temp[rowIndex][colIndex] = crossRef;
        }
        // console.log(rowIndex,colIndex,findUniqueFromMatrix(col,tempSol,rowIndex,colIndex))
      }))
      return temp;
    };
    const findUniqueFromMatrix=(valArr,matrix,row,col)=>{
      var tempMatrix=JSON.parse(JSON.stringify(matrix))
      const rowResult=findUniqueFromArr(valArr,tempMatrix[row])
      const colResult=findUniqueFromArr(valArr,getCol(tempMatrix,col))
      const blockResult=findUniqueFromArr(valArr,getBlock(tempMatrix, getBlockAddress([row,col])))
      // console.log(rowResult?rowResult: colResult ? colResult : blockResult ? blockResult : null,row,col)
      return rowResult?rowResult: colResult ? colResult : blockResult ? blockResult : null
    }
    const findUniqueFromArr = (valArr,arr1) => {
      var ret = JSON.parse(JSON.stringify(arr1));
      var temp=[];
      ret.forEach(elem=>elem.forEach(ele=>temp.push(ele)))
      var uniqDigit=[];
      valArr.forEach(elem=>temp.filter(e=>e===elem).length===1 && uniqDigit.push(elem))
      return uniqDigit.toString();
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
