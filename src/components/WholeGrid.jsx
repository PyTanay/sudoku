import React from 'react'
import OneRow from './OneRow'

function WholeGrid() {
    return (
        <div className="wholeGrid">
            {[...Array(8)].map((x,index)=>(
                <OneRow key={index} row={index+1} />
            ))}
            <OneRow />
        </div>
    )
}

export default WholeGrid
