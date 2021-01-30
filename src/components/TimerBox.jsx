import React,{useContext} from 'react'
import './timerBox.css'
import Timer from  'react-compound-timer'
import {AppContext} from '../App'

function TimerBox() {
    const {timerMethods, setTimerMethods,time,setTime} = useContext(AppContext)

    return (
        <div className="pillBox">
            <Timer>
                {({start, resume, pause, stop, reset, timerState})=>{
                    if(timerMethods.start===undefined){
                        setTimerMethods({start, resume, pause, stop, reset, timerState})
                    }
                    return <>
                        Timer :
                        <Timer.Hours formatValue={value =>{
                            var temp={...time}
                            if(value!==0){
                                if(temp.hour!==value){
                                    temp.hour=value
                                    setTime(temp)
                                }
                                return ` ${value} h`
                            }else{
                                return null
                            }
                        }} />
                        <Timer.Minutes formatValue={value =>{
                            var temp={...time}
                            if(value!==0){
                                if(temp.min!==value){
                                    temp.min=value
                                    setTime(temp)
                                }
                                return ` ${value} m`
                            }else{
                                return null
                            }
                        }} />
                        <Timer.Seconds formatValue={value =>{
                            var temp={...time}
                            if(value!==0){
                                if(temp.sec!==value){
                                    temp.sec=value
                                    setTime(temp)
                                }
                                return ` ${value} s`
                            }else{
                                return null
                            }
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
