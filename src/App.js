import logo from './logo.svg';
import './App.css';
// import SingleBox from './components/SingleBox';
// import OneRow from './components/OneRow';
import WholeGrid from './components/WholeGrid';
// import NumberSelector from './components/NumberSelector';
import AllNumSel from './components/AllNumSel';
import React, { useState, useEffect,useRef } from 'react';
// import Utility from './components/Utility';
import TimerBox from './components/TimerBox';
import Popup from 'react-popup';
import './components/popUp.css'

export const AppContext = React.createContext();


function App() {
  useEffect(() => {
    const clickChecker = (e) => {
      if(e.target.classList[0]!=="text1" && e.target.classList[0]!=="text"){
        setSelected([undefined,undefined])
      }
    }
    
    fetch('puzzleList.json', { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
      .then(res => {
        return res.json()
      })
      .then(res => {
        const randSelector = Math.floor(Math.random() * res.database.length)
        const tempData = res.database[randSelector].data
        if (tempData !== undefined) {
          setInitialValue(res.database[randSelector].data)
        }
      }).catch(err => { console.log("File could not be loaded for some reason!", err) })
    document.addEventListener("click", clickChecker)
    return () => {
      document.removeEventListener("click", clickChecker)
    }
  }, [])

  const [selected, setSelected] = useState([undefined, undefined])
  const [value, setValue] = useState(Array(9).fill(Array(9).fill(null)))
  const [initialValue, setInitialValue] = useState(Array(9).fill(Array(9).fill(null)))
  const [solution, setSolution] = useState(Array(9).fill(Array(9).fill(null)))
  const [displayError, setDisplayError] = useState(false)
  const [path, setPath] = useState([])
  // const [timerMethods, setTimerMethods] = useState({})
  // const [time, setTime] = useState({hour:0,min:0,sec:0})
  const timerControls = useRef({})
  const timeValue = useRef({hour:0,min:0,sec:0})
  
  useEffect(() => {
    if (initialValue.length > 0)
      setValue([...initialValue])
    }, [initialValue])
  const getCol = (matrix,col) => {
    var tempCol = []
    matrix.forEach(elem => { tempCol.push(elem[col]) })
    return tempCol
  }
  const getBlock = (matrix,blockAddress) => {
    var tempBlock = []
    matrix.forEach((elem, index) => {
      if (index < blockAddress[0] * 3 && index >= (blockAddress[0] - 1) * 3) {
        tempBlock.push(...elem.slice((blockAddress[1] - 1) * 3, blockAddress[1] * 3))
      }
    })
    return tempBlock
  }
  const getBlockAddress = (address) => {
    var tempRow = Math.floor(address[0] / 3 + 1)
    var tempCol = Math.floor(address[1] / 3 + 1)
    return [tempRow, tempCol]
  }
  
  const providerValue = { selected, setSelected, value, setValue, getCol, getBlock, getBlockAddress,
     initialValue,solution,setSolution,path,setPath,displayError, setDisplayError,Popup,
    timerControls,timeValue}

  return (
    <div className="App">
      <Popup />
      {document.getElementById('popupContainer')}
      <AppContext.Provider value={providerValue}>
        <div className="appHeader">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">Sudoku</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="iconBar">
          <TimerBox />
        </div>
        <div className="mainGame">
          <WholeGrid />
          <AllNumSel />
          {/* <Utility /> */}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
