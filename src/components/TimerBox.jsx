import React,{useContext} from 'react'
import './timerBox.css'
import Timer from  'react-compound-timer'
import {AppContext} from '../App'

function TimerBox() {
    const {timerMethods, setTimerMethods} = useContext(AppContext)

    return (
        <div className="pillBox">
            <Timer>
                {({start, resume, pause, stop, reset, timerState})=>{
                    if(timerMethods.start===undefined){
                        setTimerMethods({start, resume, pause, stop, reset, timerState})
                    }
                    return <>
                        Timer :
                        <Timer.Hours formatValue={value => value!==0 ?` ${value} h`:null} />
                        <Timer.Minutes formatValue={value =>value!==0 ?` ${value} m`:null} />
                        <Timer.Seconds formatValue={value => ` ${value} s`} />
                    </>
                }}
                
            </Timer>
        </div>
    )
}

export default TimerBox
