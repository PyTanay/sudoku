import React,{useState, useContext} from 'react'
import {AppContext} from '../App'
import OneRow from './OneRow'
import './wholeGrid.css'

function WholeGrid() {
    const {selected,setSelected,value,setValue}=useContext(AppContext)
    return (
        <div className="wholeGrid">
            {[...Array(9)].map((x,index)=><OneRow key={index} row={index} selected={selected} setSelected={setSelected} value={value} />)}
        </div>
    )
}

export default WholeGrid
