import React from 'react'
import NumberSelector from './NumberSelector'
import './allNumSel.css'
import { BiEraser,BiReset } from "react-icons/bi";

function AllNumSel() {
    const arr1=[7,8,9,4,5,6,1,2,3,<BiEraser />,0,<BiReset />]
    return (
        <div className="allNumSel">
            {arr1.map((x,index)=>(
                <NumberSelector key={index} val={x}/>
            ))}
        </div>
    )
}

export default AllNumSel
