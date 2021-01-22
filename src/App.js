import logo from './logo.svg';
import './App.css';
// import SingleBox from './components/SingleBox';
// import OneRow from './components/OneRow';
import WholeGrid from './components/WholeGrid';
// import NumberSelector from './components/NumberSelector';
import AllNumSel from './components/AllNumSel';
import React,{ useState} from 'react';
export const AppContext=React.createContext();

function App() {
  const [selected, setSelected] = useState([undefined,undefined])
  const [value, setValue] = useState([[...Array(9)].fill(null),[...Array(9)].fill(null),[...Array(9)].fill(null),[...Array(9)].fill(null),[...Array(9)].fill(null),[...Array(9)].fill(null),[...Array(9)].fill(null),[...Array(9)].fill(null),[...Array(9)].fill(null)])
  const getCol=(col)=>{
    var tempCol=[]
    value.forEach(elem=>{tempCol.push(elem[col])})
    return tempCol
  }
  const getBlock=(blockAddress)=>{
    var tempBlock=[]
    value.forEach((elem,index)=>{
      if(index<blockAddress[0]*3 && index>=(blockAddress[0]-1)*3){
        tempBlock.push(...elem.slice((blockAddress[1]-1)*3,blockAddress[1]*3))
      }
    })
    return tempBlock
  }
  const getBlockAddress=(address)=>{
    var tempRow=Math.floor(address[0]/3+1)
    var tempCol=Math.floor(address[1]/3+1)
    return [tempRow,tempCol]
  }
  const providerValue={selected,setSelected,value,setValue,getCol,getBlock,getBlockAddress}
  
  // useMemo(()=>({
  //   selected,setSelected,value,setValue
  // }),[selected,value])
  return (
    <div className="App">
      <AppContext.Provider value={providerValue}>
        <div className="appHeader">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">Sudoku</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="mainGame">
          <WholeGrid />
          <AllNumSel />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
