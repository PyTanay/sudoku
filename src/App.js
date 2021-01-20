import logo from './logo.svg';
import './App.css';
// import SingleBox from './components/SingleBox';
// import OneRow from './components/OneRow';
import WholeGrid from './components/WholeGrid';
// import NumberSelector from './components/NumberSelector';
import AllNumSel from './components/AllNumSel';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">Sudoku</h1>
        <WholeGrid />
        <AllNumSel />
    </div>
  );
}

export default App;
