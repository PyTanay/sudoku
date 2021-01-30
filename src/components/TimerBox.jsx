import React,{useContext,useEffect, useRef} from 'react'
import './timerBox.css'
import Timer from  'react-compound-timer'
import {AppContext} from '../App'

function TimerBox() {
    const {timerControls, timeValue} = useContext(AppContext)
    return (
        <div className="pillBox">
            <Timer>
                {({start, resume, pause, stop, reset, timerState})=>{
                    if(timerControls.current.start===undefined){
                        timerControls.current={start, resume, pause, stop, reset, timerState}
                    }
                    return <>
                        Timer :
                        <Timer.Hours formatValue={value =>{
                            if(value!==0){
                                timeValue.current.hour=value
                                return ` ${value} h`
                            }else{
                                return null
                            }
                        }} />
                        <Timer.Minutes formatValue={value =>{
                            if(value!==0){
                                timeValue.current.min=value
                                return ` ${value} m`
                            }else{
                                return null
                            }
                        }} />
                        <Timer.Seconds formatValue={value =>{
                            timeValue.current.sec=value
                            return ` ${value} s`
                        }} />
                        {/* <Timer.Minutes formatValue={value =>value!==0 ?` ${value} m`:null} /> */}
                        {/* <Timer.Seconds formatValue={value => ` ${value} s`} /> */}
                    </>
                }}
                
            </Timer>
        </div>
    )
}

export default TimerBox
