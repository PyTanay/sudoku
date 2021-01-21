import React from 'react'
import OneRow from './OneRow'
import './wholeGrid.css'

function WholeGrid() {
    return (
        <div className="wholeGrid">
            {[...Array(9)].map((x,index)=><OneRow key={index} row={index}  />)}
        </div>
    )
}

export default WholeGrid
