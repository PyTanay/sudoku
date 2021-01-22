import React from 'react'
import OneRow from './OneRow'
import './wholeGrid.css'

function WholeGrid() {
    return (
        <div className="wholeGrid">
            {[...Array(9)].map((x,index)=>(index===2||index===5)?<><OneRow key={index} row={index}  /><div className="hLine"></div></>:<OneRow key={index} row={index}  />)}
        </div>
    )
}

export default WholeGrid
