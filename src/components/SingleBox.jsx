import React,{useState} from 'react'
import './singleBox.css'

function SingleBox(props) {
    const [address] = useState([props.row,props.col])
    return (
        <div onClick={()=>props.setSelected(address)} className={`singleBox ${props.selected===address && "selectedBox"}`}>
            <div className="text">
                {props.value[address[0]][address[1]]}
            </div>
        </div>
    )
}

export default SingleBox
