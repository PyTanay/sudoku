import React from 'react'
import NumberSelector from './NumberSelector'
import './allNumSel.css'
import { BiEraser } from "react-icons/bi";
import { AiFillStepBackward,AiFillStepForward } from "react-icons/ai";
import Utility from './Utility';

function AllNumSel() {
    var arr1=[1,2,3,4,5,6,7,8,9,<BiEraser tip="Delete"/>,<AiFillStepBackward tip="Step Back" />,<AiFillStepForward tip="Step Forward" />]
    if(window.innerWidth<=600) {
        arr1=[1,2,3,4,5,6,7,8,9,<AiFillStepBackward tip="Step Back" />,<BiEraser tip="Delete"/>,<AiFillStepForward tip="Step Forward"/>]
    }
    return (
        <div className="allNumSel">
            {arr1.map((x,index)=>(
                <NumberSelector key={index} val={x}/>
            ))}
            <Utility />
        </div>
    )
}

export default AllNumSel
