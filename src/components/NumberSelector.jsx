import React,{useState,useEffect} from 'react'
import './numberSelector.css'

function NumberSelector(props) {
    const [number, setNumber] = useState(0)
    useEffect(() => {
        setNumber(props.val)
    }, [props])
    return (
        <div className="numberSelector">
            <div className="text">
                {number}
            </div>
        </div>
    )
}

export default NumberSelector
