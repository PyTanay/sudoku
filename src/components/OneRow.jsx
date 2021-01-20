import React from 'react'
import SingleBox from './SingleBox'
import './oneRow.css'

function OneRow() {
    return (
        <div className="oneRow">
            {[...Array(9)].map((i,index)=>(
                <SingleBox key={index} />
            ))}
        </div>
    )
}

export default OneRow
