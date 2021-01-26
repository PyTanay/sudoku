import React,{useState,useContext,useEffect, useRef} from 'react'
import {AppContext} from '../App'
import './singleBox.css'
import confetti from 'canvas-confetti'

function SingleBox(props) {
    const {selected,setSelected,value,getCol,getBlock,getBlockAddress,initialValue,path,setPath}= useContext(AppContext)
    const [address] = useState([props.row,props.col])
    var classList=["singleBox"]
    const pervValueRef=useRef();
    useEffect(() => {
        pervValueRef.current=value
    })
    const prevValue=pervValueRef.current;
    useEffect(() => {
        if(prevValue!==undefined){
            const currVal=value[props.row][props.col]
            const prevVal=prevValue[props.row][props.col]
            if(currVal!==prevVal && initialValue[props.row][props.col]===null){
                const data={row:props.row,col:props.col,currVal,prevVal}
                const tempPath=JSON.parse(JSON.stringify(path))
                tempPath.push(data)
                // console.log(tempPath)

                
                //add this confetti effect when user finishes the sudoku and solution is true
                // confetti({
                //     particleCount: 100,
                //     startVelocity: 30,
                //     spread: 360,
                //     origin: {
                //         x: Math.random(),
                //         // since they fall down, start a bit higher than random
                //         y: Math.random() - 0.2
                //     }
                // });
                setPath(tempPath)
                // console.log(`Address ${props.row},${props.col} changed from ${prevVal} to ${currVal}`)
            }
        }
    }, [value])
    //this is for original data - that can not be changed
    if(initialValue.length>0){
        if(initialValue[address[0]][address[1]]!==null){
            // console.log(initialValue[address[0]][address[1]],address)
            classList.push("disabledBox")
        }
    }
    //this adds class to display selected number
    if(selected.toString()===address.toString() && !classList.includes("selectedBox")){
        classList.push("selectedBox")
    }else{
        classList=classList.filter(elem=>elem!=="selectedBox")
    }

    //this adds class to display similar cells
    if(value[address[0]][address[1]]!==null && selected[0]!==undefined){
        if(value[address[0]][address[1]]===value[selected[0]][selected[1]] && address.toString()!==selected.toString()){
            classList.push("similarBox")
        }else{
            classList=classList.filter(elem=>elem!=="similarBox")
        }
    }
    //this is for validation and adds class to invalid cells
    //row test
    if(selected[0]!==undefined && value[selected[0]][selected[1]]!==null && address[0]===selected[0] && address[1]!==selected[1]){
        if(value[address[0]].filter(x=>x===value[selected[0]][selected[1]]).length>1 && value[address[0]][address[1]]===value[selected[0]][selected[1]]){
            classList.push("dangerBox")
        }else{
            classList=classList.filter(elem=>elem!=="dangerBox")
        }
    }
    //column test
    if(selected[0]!==undefined && value[selected[0]][selected[1]]!==null && address[1]===selected[1] && address[0]!==selected[0]){
        if(getCol(value,selected[1]).filter(x=>x===value[selected[0]][selected[1]]).length>1 && value[address[0]][address[1]]===value[selected[0]][selected[1]]){
            classList.push("dangerBox")
        }else{
            classList=classList.filter(elem=>elem!=="dangerBox")
        }
    }
    //block test
    if(selected[0]!==undefined && value[selected[0]][selected[1]]!==null && address[0]!==selected[0] && getBlockAddress(address).toString()===getBlockAddress(selected).toString()){
        if(getBlock(value,getBlockAddress(address)).filter(x=>x===value[address[0]][address[1]]).length>1 && value[address[0]][address[1]]===value[selected[0]][selected[1]]){
            classList.push("dangerBox")
        }else{
            classList=classList.filter(elem=>elem!=="dangerBox")
        }
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
