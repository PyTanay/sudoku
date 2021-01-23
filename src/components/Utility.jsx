import React,{useContext} from 'react'
import {AppContext} from '../App'
import { BiExport } from "react-icons/bi";
import './utility.css';

function Utility() {
    const {value} = useContext(AppContext)
    const exportSudoku=()=>{
        const tempDate=new Date(Date.now())
        console.log(tempDate.toLocaleString("en-GB"))
        const temp={
            creator:"Tanay",
            time:tempDate.toLocaleString("en-GB"),
            data:value
        }
        console.log(Date.now())
        console.log(JSON.stringify(temp))
    }
    return (
        <div className="utility" onClick={exportSudoku}>
            <button className="btn"><BiExport /> Export Sudoku</button>
        </div>
    )
}

export default Utility
