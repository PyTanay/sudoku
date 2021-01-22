import React,{useState,useContext} from 'react'
import {AppContext} from '../App'
import './singleBox.css'

function SingleBox(props) {
    const {selected,setSelected,value,getCol,getBlock,getBlockAddress}= useContext(AppContext)
    const [address] = useState([props.row,props.col])
    var classList=["singleBox"]
    if(selected.toString()===address.toString() && !classList.includes("selectedBox")){
        classList.push("selectedBox")
    }else{
        classList=classList.filter(elem=>elem!=="selectedBox")
    }
    if(value[address[0]][address[1]]!==null && selected[0]!==undefined){
        if(value[address[0]][address[1]]===value[selected[0]][selected[1]] && address.toString()!==selected.toString()){
            classList.push("similarBox")
        }else{
            classList=classList.filter(elem=>elem!=="similarBox")
        }
    }
    if(selected[0]!==undefined && value[selected[0]][selected[1]]!==null && address[0]===selected[0] && address[1]!==selected[1]){
        if(value[address[0]].filter(x=>x===value[selected[0]][selected[1]]).length>1 && value[address[0]][address[1]]===value[selected[0]][selected[1]]){
            classList.push("dangerBox")
        }else{
            classList=classList.filter(elem=>elem!=="dangerBox")
        }
    }
    if(selected[0]!==undefined && value[selected[0]][selected[1]]!==null && address[1]===selected[1] && address[0]!==selected[0]){
        if(getCol(selected[1]).filter(x=>x===value[selected[0]][selected[1]]).length>1 && value[address[0]][address[1]]===value[selected[0]][selected[1]]){
            classList.push("dangerBox")
        }else{
            classList=classList.filter(elem=>elem!=="dangerBox")
        }
    }
    if(selected[0]!==undefined && value[selected[0]][selected[1]]!==null && address[0]!==selected[0] && getBlockAddress(address).toString()===getBlockAddress(selected).toString()){
        if(getBlock(getBlockAddress(address)).filter(x=>x===value[address[0]][address[1]]).length>1 && value[address[0]][address[1]]===value[selected[0]][selected[1]]){
            classList.push("dangerBox")
        }else{
            classList=classList.filter(elem=>elem!=="dangerBox")
        }
    }
    if(selected.toString()===address.toString() && selected[0]!==undefined){
        console.log(value[selected[0]][selected[1]])
    }
    return (
        <div onClick={()=>setSelected(address)} className={classList.join(" ")}>
            <div className="text1">
                {value[address[0]][address[1]]}
            </div>
        </div>
    )
}

export default SingleBox
