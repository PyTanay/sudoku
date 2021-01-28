import React from 'react'
import NumberSelector from './NumberSelector'
import './allNumSel.css'
import { BiEraser } from "react-icons/bi";
import { AiFillStepBackward,AiFillStepForward } from "react-icons/ai";

function AllNumSel() {
    var arr1=[7,8,9,4,5,6,1,2,3,<AiFillStepBackward tip="Step Back" />,0,<AiFillStepForward tip="Step Forward" />,<BiEraser tip="Delete"/>]
    if(window.innerWidth<=600) {
        arr1=[0,1,2,3,4,5,6,7,8,9,<AiFillStepBackward tip="Step Back" />,<BiEraser tip="Delete"/>,<AiFillStepForward tip="Step Forward"/>]
    }
    return (
        <div className="allNumSel">
            {arr1.map((x,index)=>(
                <NumberSelector key={index} val={x}/>
            ))}
        </div>
    )
}

export default AllNumSel
