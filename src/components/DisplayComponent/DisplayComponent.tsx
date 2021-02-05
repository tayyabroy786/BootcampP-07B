import React, { useState } from 'react'
import TimerButtons from "../TimerButtons/TimerButtons"



const DisplayComponent = () => {

    let [hours, setHours] = useState<number>(0);
    let [minutes, setMintues] = useState<number>(0);
    let [seconds, setSeconds] = useState<number>(0);
    let [miliseconds, setMiliSeconds] = useState<number>(0)
    let [status, setStatus] = useState<number>(0)
    let [interve, setInterve] = useState<any>()

    const start = () => {
        run();
        setStatus(1)
        setInterve(setInterval(run, 10))
    }


    const run = () => {

        // For updating hours through minutes
        if (minutes === 60) {
            setHours(hours++)
            minutes = 0;
        }

        // For updating minutes through seconds 
        if (seconds === 60) {
            setMintues(minutes++);
            seconds = 0;
        }

        // /For updating seconds through miliseconds
        if (miliseconds === 100) {
            setSeconds(seconds++);
            miliseconds = 0;
        }
        setMiliSeconds(miliseconds++)

    }

    // Stop Function
    const stop = () => {
        clearInterval(interve)
        setStatus(2);

    }

    // Reset Function
    const reset = () => {
        clearInterval(interve);
        setStatus(0)
        setHours(0)
        setMiliSeconds(0)
        setMintues(0)
        setSeconds(0)
    }

    // Resume function
    const resume = () => start()



    return (
        <div className="DisplayComponent_main">
            <div className="DisplayComponent_span">
                <span>{(hours >= 10) ? hours : `0${hours}`}</span><b>:</b>
                <span>{(minutes >= 10) ? minutes : `0${minutes}`}</span><b>:</b>
                <span>{(seconds >= 10) ? seconds : `0${seconds}`}</span><b>:</b>
                <span>{(miliseconds >= 10) ? miliseconds : `0${miliseconds}`}</span>
            </div>
            <div>
                <TimerButtons resume={resume} reset={reset} stop={stop} buttonStatus={status} buttonAction={start} buttonValue={`Start`} />
            </div>
        </div>
    )
}
export default DisplayComponent
