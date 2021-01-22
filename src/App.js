import logo from './logo.svg';
import './App.css';
// import SingleBox from './components/SingleBox';
// import OneRow from './components/OneRow';
import WholeGrid from './components/WholeGrid';
// import NumberSelector from './components/NumberSelector';
import AllNumSel from './components/AllNumSel';
import React,{ useState,useMemo} from 'react';
export const AppContext=React.createContext();

function App() {
  const [selected, setSelected] = useState([])
  const [value, setValue] = useState([[...Array(9)],[...Array(9)],[...Array(9)],[...Array(9)],[...Array(9)],[...Array(9)],[...Array(9)],[...Array(9)],[...Array(9)]])
  const providerValue={selected,setSelected,value,setValue}
  
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
