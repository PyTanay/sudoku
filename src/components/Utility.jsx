import React,{useContext} from 'react'
import {AppContext} from '../App'
import { BiExport,BiRefresh } from "react-icons/bi";
import './utility.css';

function Utility() {
    const {value,setValue,initialValue} = useContext(AppContext)
    const exportSudoku=()=>{
        const tempDate=new Date(Date.now())
        const temp={
            creator:"Tanay",
            time:tempDate.toLocaleString("en-GB"),
            data:value
        }
        console.log(JSON.stringify(temp))
    }
    const resetSudoku=()=>{
        if(initialValue.length>0){
            setValue(initialValue)
        }
    }
    return (
        <div className="utility" >
            <button className="btn" onClick={exportSudoku}><BiExport /> Export Sudoku</button>
            <button className="btn" onClick={resetSudoku}><BiRefresh /> Reset</button>
        </div>
    )
}

export default Utility
