import React,{useContext} from 'react'
import {AppContext} from '../App'
import './numberSelector.css'
import ReactTooltip from 'react-tooltip';

function NumberSelector(props) {
    const {value,setValue,selected}=useContext(AppContext)
    const onclick1=()=>{
        if(selected[0]>=0){
            var temp=JSON.parse(JSON.stringify(value))
            // console.log(props.val.type.name)
            if(props.val>=0 && props.val<10){
                temp[selected[0]][selected[1]]=props.val.toString()
            }else if(props.val.type.name==="BiEraser"){
                temp[selected[0]][selected[1]]=null
            }else{
                // temp[selected[0]][selected[1]]=null
            }
            setValue(temp)
        }else{
            
        }
    }
    const dataTip=(props.val>=0 && props.val<10) ? null : props.val.props.tip
    return (
        <div className="numberSelector" onClick={onclick1}>
            <div className="text" data-tip={dataTip}>
                <ReactTooltip effect="solid" delayShow={500} border={true} borderColor=" rgb(56, 125, 204)"/>
                {props.val}
            </div>
        </div>
    )
}

export default NumberSelector
