import React,{useContext,useEffect} from 'react'
import OneRow from './OneRow'
import './wholeGrid.css'
import {AppContext} from '../App'

function WholeGrid() {
    const {selected,setSelected,value,setValue} = useContext(AppContext)
    useEffect(() => {
        const changeValue=(e)=>{
            if(selected.length!==0){
                if(/[0-9]/.test(e.key)){
                    var temp=value
                    temp[selected[0]][selected[1]]=e.key
                    setValue([...temp])
                }
                const tempArr=['ArrowUp','ArrowLeft','ArrowDown','ArrowRight']
                if(tempArr.includes(e.key)){
                    switch (e.key) {
                        case "ArrowUp":
                            selected[0]!==0 && setSelected([selected[0]-1,selected[1]])
                            break;
                        case "ArrowLeft":
                            selected[1]!==0 && setSelected([selected[0],selected[1]-1])
                            break;
                        case "ArrowDown":
                            selected[0]!==8 && setSelected([selected[0]+1,selected[1]])
                            break;
                        case "ArrowRight":
                            selected[1]!==8 && setSelected([selected[0],selected[1]+1])
                            break;
                        default:
                            break;
                    }
                }
                if(e.key==="Delete"){
                    var temp1=value
                    temp1[selected[0]][selected[1]]=null
                    setValue([...temp1])
                }
                if(e.key==="Escape"){
                    setSelected([])
                }
            }
        }
        document.addEventListener("keydown",changeValue)
        return ()=>{
            document.removeEventListener("keydown",changeValue)
        }
    },[selected])

    return (
        <div className="wholeGrid">
            {[...Array(9)].map((x,index)=>(index===2||index===5)?<React.Fragment key={index}><OneRow row={index}  /><div className="hLine"></div></React.Fragment>:<OneRow key={index} row={index}  />)}
        </div>
    )
}

export default WholeGrid
