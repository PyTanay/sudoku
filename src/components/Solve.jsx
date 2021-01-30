import React, { useContext,useEffect,useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { AppContext } from "../App";
import confetti from 'canvas-confetti'

function Solve() {
  const { value,initialValue, getCol, getBlock, getBlockAddress,solution,setSolution, setDisplayError,Popup,timerControls,timeValue } = useContext(AppContext);
  const [solving, setSolving] = useState(false)
  const [counter, setCounter] = useState(1)
  const [solMatrix, setSolMatrix] = useState(Array.from({length: 9},()=> Array.from({length: 9}, () => Array.from("123456789"))))

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
      setSolution(solution)
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

  const isCompleted=(value)=>{
    var remaining=0;
    value.forEach((row,rowIndex)=>{
      row.forEach((col,colIndex)=>{
        if(col!==solution[rowIndex][colIndex]){
          remaining++
        }
      })
    })
    if(remaining===0){
      for(var i=0;i<6;i++){
        setTimeout(()=>confetti({particleCount: 100,startVelocity: 30,spread: 360,origin: {x: Math.random(),y: Math.random() - 0.2}}),500*i)
      }
      timerControls.current.pause()
      setTimeout(() => {
        Popup.create({
          title: 'Congratualtions!!!',
          content: `You finished the sudoku correctly in ${timeValue.current.hour!==0?timeValue.current.hour+" h":""} ${timeValue.current.min!==0?timeValue.current.min+" m":""} ${timeValue.current.sec+" s"}`,
          buttons: {
              left: [{
                  text: 'Cancel',
                  className: 'danger',
                  action: function () {
                      /** Close this popup. Close will always close the current visible one, if one is visible */
                      Popup.close();
                  }
              }],
              right: [{
                text: 'New Sudoku',
                className: 'success',
                action: function () {
                    Popup.alert('Now you will be redirected to new puzzle.');
    
                    /** Close this popup. Close will always close the current visible one, if one is visible */
                    Popup.close();
                }
            }]
            }
        })
      }, 1000);
    }
  }
  useEffect(() => {
    if(!isEmpty(initialValue))
    isCompleted(value)
  }, [value])
  const isEmpty=(matrix)=>{
    var count=0;
    matrix.forEach(row=>{
      row.forEach(col=>{
        if(col===null)count++
      })
    })
    return (count===81)?true:false
  }
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
    setDisplayError(true)
    setTimeout(()=>{
      setDisplayError(false)
    },2000)
  }
  return (
    <button className="btn" onClick={checkSudoku}>
      <FiCheckCircle /> Check
    </button>
  );
}

export default Solve;
