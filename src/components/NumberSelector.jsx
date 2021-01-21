import React,{useContext} from 'react'
import {AppContext} from '../App'
import './numberSelector.css'

function NumberSelector(props) {
    const {value,setValue,selected}=useContext(AppContext)
    const onclick1=()=>{
        if(selected[0]>=0){
            var temp=value;
            if(props.val>=0 && props.val<10){
                temp[selected[0]][selected[1]]=props.val
            }else{
                temp[selected[0]][selected[1]]=undefined
            }
            setValue([...temp])
        }
    }
    return (
        <div className="numberSelector" onClick={onclick1}>
            <div className="text">
                {props.val}
            </div>
        </div>
    )
}

export default NumberSelector
