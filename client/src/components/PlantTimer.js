import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams, useHistory } from "react-router-dom"
import { createPlant } from "../actions/plants"
import formatTime from "./formatTime.js"
import { CircleSlider } from "react-circle-slider";
import samplePlants from "./samplePlants"
import HomeButton from "./HomeButton"

function PlantTimer() {
    const [count, setCount] = useState(1)
    const [startTime, setStartTime] = useState(0)
    const [running, setRunning] = useState(false)
    const [countdownId, setCountdownId] = useState(null)
    
    const history = useHistory()
    const { type: plantType } = useParams()
    const { source: plantImg} = samplePlants.find(plantObj => plantObj.type === plantType)

    const dispatch = useDispatch()

    // Reusable countdown initiation
    const runIntervalProcess = () => {
        if (!running || count > 0)  {
            setStartTime(count)
            setRunning(true)

            const intervalId = setInterval(() => {
                setCount(prevCount => {
                    if (prevCount === 0) {
                        clearInterval(intervalId)
                        setRunning(false)
                        setCountdownId(null)
                        
                        // Save the completed plant when user finishes it
                        dispatch(createPlant({ type: plantType }))

                        history.push("/")
                        return prevCount
                    }

                    return prevCount - 1
                })
            }, 1000)

            setCountdownId(intervalId);
        }
    }

    const handleChange = value => {
        setCount((value * 54) - ((value * 54) % 30 ));
    }

    return (
        <>
            {!running && <HomeButton />}
            <div className="timer">
                {startTime === 0 
                    && 
                <CircleSlider
                    value={count} 
                    onChange={handleChange} 
                    circleColor="white"
                    progressColor="#00c254"
                    size="450"
                    stepSize="0.5"
                />}

                <img src={plantImg} alt="plant"></img>

                <div className="timerButtons">
                    <h3 className="timeLeft">{formatTime(count)}</h3>
                    <button style={{ display: (!running && count > 0) ? "block" : "none" }}
                            onClick={runIntervalProcess}>
                            Go!
                    </button>

                    <button style={{ display: (running && startTime) ? "block" : "none" }}
                            onClick={() => clearInterval(countdownId)}>
                            Give up
                    </button>    
                </div>
            </div>
        </>
    )    
}

export default PlantTimer