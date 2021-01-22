import React, { useState } from 'react'
import SingleBox from './SingleBox'
import './oneRow.css'

function OneRow(props) {
    const [row] = useState(props.row)
    return (
        <div className="oneRow">
            {[...Array(9)].map((i,index)=>{
                if(index===2||index===5){
                    return <><SingleBox key={index} col={index} row={row} /><div className="vLine"></div></>
                }else{
                    return <SingleBox key={index} col={index} row={row} />
                }
            })}
        </div>
    )
}

export default OneRow
