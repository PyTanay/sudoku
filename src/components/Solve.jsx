import React, { useContext,useEffect,useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { AppContext } from "../App";

function Solve() {
  const { value, initialValue, getCol, getBlock, getBlockAddress,solution,setSolution } = useContext(AppContext);
  const [solving, setSolving] = useState(false)
  const [counter, setCounter] = useState(1)
  const strArr=["1","2","3","4","5","6","7","8","9"]
  const [solMatrix, setSolMatrix] = useState(Array.from({length: 9},()=> Array.from({length: 9}, () => Array.from("123456789"))))
  // var solMatrix=Array(9).fill(Array(9).fill([...Array(10).keys()].slice(1).map((elem) => elem.toString())))
  // console.log(Array.from({length: 9},()=> Array.from({length: 9}, () => Array.from("123456789"))))
  // console.log("States initialized",solMatrix)

  const solveSudoku =() => {
    setSolving(true)
    setSolution(methodA(value))
  };
  useEffect(() => {
    setTimeout(()=>{
      solveSudoku()
    },200)
  },[])
  useEffect(() => {
    if(isFinished(solution)===false && counter<20 && solving===true){
      // console.log(solMatrix,"Iteration",counter)
      setSolution(methodA(solution))
      setCounter(counter+1)
    }else if(isFinished(solution)===true){
      console.log("Sudoku successfully solved")
      console.log(solution)
      setSolving(false)
      setCounter(1)
    }else if(counter===20){
      console.log("Maximum iteration reached, Could not solve the sudoku.")
      console.log(solution)
      setSolving(false)
      setCounter(1)
    }else{
      console.log("something's wrong")
      setSolving(false)
      setCounter(1)
    }
  }, [solution])

  const isFinished = (currentVal) => {
    var currArr = [];
    currentVal.forEach((row) => {
      row.forEach((col) => currArr.push(col));
    });
    currArr = currArr.filter((elem) => elem === null);
    return currArr.length === 0 ? true : false;
  };
  //there are two solution methods and in order to solve sudoku both method needs to be implemented mulltiple times
  //methodA --> checks the cell against row column and blocks and figures which solutions are possible for the cell
  //methodB --> checks the cell solutions based on the other for related blocks
  const methodA =(startPoint) => {
    var temp = JSON.parse(JSON.stringify(startPoint));
    var tempSol = Array(9).fill([]);
    // console.log(solMatrix)
    solMatrix.forEach((row, rowIndex) => {
      var tempSol2 = [];
      row.forEach((col, colIndex) => {
        if (value[rowIndex][colIndex] === null) {
          var filtRow = temp[rowIndex].filter((elem) => elem !== null).filter(elem=>elem!==temp[rowIndex][colIndex]);
          var filtColumn = getCol(temp, colIndex).filter((elem) => elem !== null).filter(elem=>elem!==temp[rowIndex][colIndex]);
          var filtBlock = getBlock(temp, getBlockAddress([rowIndex, colIndex])).filter((elem) => elem !== null).filter(elem=>elem!==temp[rowIndex][colIndex]);
          var tempCell = col.filter((elem) => !filtRow.includes(elem));
          tempCell = tempCell.filter((elem) => !filtColumn.includes(elem));
          tempCell = tempCell.filter((elem) => !filtBlock.includes(elem));
        } else {
          tempCell = [value[rowIndex][colIndex]];
        }
        tempSol2.push(JSON.parse(JSON.stringify(tempCell)));
        if (tempCell.length === 1 && temp[rowIndex][colIndex] === null) {
          temp[rowIndex][colIndex] = tempCell[0];
        }
      });
      tempSol[rowIndex] = JSON.parse(JSON.stringify(tempSol2));
    });
    
    tempSol.forEach((row, rowIndex) =>{
      row.forEach((col, colIndex) => {
        var crossRef = findUniqueFromMatrix(col, tempSol, rowIndex, colIndex);
        if (crossRef !== null && temp[rowIndex][colIndex] === null) {
          temp[rowIndex][colIndex] = crossRef;
          tempSol[rowIndex][colIndex]=[crossRef]
        }
        // console.log(rowIndex,colIndex,findUniqueFromMatrix(col,tempSol,rowIndex,colIndex))
      })
    });
    cleanUpSolMatrix(tempSol)
    return temp;
  };
  const cleanUpSolMatrix=(matrix)=>{
    var tempMatrix=JSON.parse(JSON.stringify(matrix));
    tempMatrix.forEach((row,rowIndex)=>{
      row.forEach((col,colIndex)=>{
        // var col=JSON.parse(JSON.stringify(col))
        const rowArr = tempMatrix[rowIndex];
        const colArr = getCol(tempMatrix, colIndex);
        const blockArr = getBlock(tempMatrix, getBlockAddress([rowIndex, colIndex]));
        // console.log("Address",rowIndex,colIndex)
        col=findUniquePair(col,rowArr)
        col=findUniquePair(col,colArr)
        col=findUniquePair(col,blockArr)
        tempMatrix[rowIndex][colIndex]=col
      })
    })
    // console.log(tempMatrix.map(elem=>elem.map(elem1=>elem1.toString())))
    setSolMatrix(tempMatrix)
    // console.log(solMatrix.map(elem=>elem.map(elem1=>elem1.toString())))

    // solMatrix=tempMatrix
  }
  const findUniquePair=(valArr,arr1)=>{
    var tempArr=JSON.parse(JSON.stringify(valArr))
    var temp=[]
    arr1.forEach(elem=>{
      if(elem.length===2 && arr1.filter(elem1=>elem1.toString()===elem.toString()).length===2){
        if(elem.toString()!==tempArr.toString()){
          if(!temp.includes(elem[0]) && !temp.includes(elem[1])){
            temp.push(elem[0])
            temp.push(elem[1])
          }
        }
      }
    })
    // console.log(temp)
    tempArr=tempArr.filter(elem2=>!temp.includes(elem2))
    return tempArr
  }
  const findUniqueFromMatrix = (valArr, matrix, row, col) => {
    var tempMatrix = JSON.parse(JSON.stringify(matrix));
    const rowResult = findUniqueFromArr(valArr, tempMatrix[row]);
    const colResult = findUniqueFromArr(valArr, getCol(tempMatrix, col));
    const blockResult = findUniqueFromArr(valArr, getBlock(tempMatrix, getBlockAddress([row, col])));
    // console.log(rowResult?rowResult: colResult ? colResult : blockResult ? blockResult : null,row,col)
    return rowResult ? rowResult : colResult ? colResult : blockResult ? blockResult : null;
  };
  const findUniqueFromArr = (valArr, arr1) => {
    var ret = JSON.parse(JSON.stringify(arr1));
    var temp = [];
    ret.forEach((elem) => elem.forEach((ele) => temp.push(ele)));
    var uniqDigit = [];
    valArr.forEach((elem) => temp.filter((e) => e === elem).length === 1 && uniqDigit.push(elem));
    return uniqDigit.toString();
  };
  const checkSudoku=()=>{
    console.log("Checking Sudoku...")
  }
  return (
    <button className="btn" onClick={checkSudoku}>
      <FiCheckCircle /> Check
    </button>
  );
}

export default Solve;
