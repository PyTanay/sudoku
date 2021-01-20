import React,{useState,useEffect,useContext} from 'react'
import {AppContext} from '../App'
import './numberSelector.css'

function NumberSelector(props) {
    const [number, setNumber] = useState(0)
    const {value,setValue,selected}=useContext(AppContext)
    useEffect(() => {
        setNumber(props.val)
    }, [props])
    onclick=()=>{
        if(selected[0]){
            console.log(selected)
            var temp=value;
            temp[selected[0]][selected[1]]=number
            setValue(temp)
        }
    }
    return (
        <div className="numberSelector" onClick={onclick}>
            <div className="text">
                {number}
            </div>
        </div>
    )
}

export default NumberSelector
