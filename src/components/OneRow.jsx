import React, { useState } from 'react'
import SingleBox from './SingleBox'
import './oneRow.css'

function OneRow(props) {
    const [row] = useState(props.row)
    return (
        <div className="oneRow">
            {[...Array(9)].map((i,index)=>(
                <SingleBox key={index} col={index} row={row} />
            ))}
        </div>
    )
}

export default OneRow
