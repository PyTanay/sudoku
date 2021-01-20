import React from 'react'
import NumberSelector from './NumberSelector'
import './allNumSel.css'

function AllNumSel() {
    return (
        <div className="allNumSel">
            {[...Array(10)].map((x,index)=>(
                <NumberSelector val={index}/>
            ))}
        </div>
    )
}

export default AllNumSel
