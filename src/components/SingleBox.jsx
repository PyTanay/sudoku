import React,{useState,useContext} from 'react'
import {AppContext} from '../App'
import './singleBox.css'

function SingleBox(props) {
    const {selected,setSelected,value}= useContext(AppContext)
    const [address] = useState([props.row,props.col])
    return (
        <div onClick={()=>setSelected(address)} className={`singleBox ${selected===address && "selectedBox"}`}>
            <div className="text1 scrollIn">
                {value[address[0]][address[1]]}
            </div>
        </div>
    )
}

export default SingleBox
