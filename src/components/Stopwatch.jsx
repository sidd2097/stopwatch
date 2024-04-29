import React, {useState, useEffect} from 'react';
import './Stopwatch.css';

const Stopwatch = ()=> {
    const [time, setTime] = useState(0);
    const[isRunning, setIsRunning] = useState(false);

    useEffect(()=> {
        let intervalId;
        if(isRunning){
            intervalId = setInterval(()=> {
                setTime((prevTime)=> prevTime + 1);
            }, 1000);
        } else {
            clearInterval(intervalId);
        }

        return() => clearInterval(intervalId);
    },[isRunning]);

    const startStopwatch = ()=> {
        setIsRunning(true);
    };

    const stopStopwatch = ()=> {
        setIsRunning(false);
    };

    const resetStopwatch = ()=> {
        setTime(0);
        setIsRunning(false);
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds/60);
        const seconds = timeInSeconds % 60;
        return  `${minutes}:${seconds < 10 ? '0': ''}${seconds}`;
    };

    return (
        <div className='stopwatch'>
            <h1>Stopwatch</h1>
            <div className="time">Time: {formatTime(time)}</div>
            <div className="buttons">
                {isRunning ? (
                    <button onClick={stopStopwatch}>Stop</button>
                ) : (
                    <button onClick={startStopwatch}>Start</button>
                )}
                <button onClick={resetStopwatch}>Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch;