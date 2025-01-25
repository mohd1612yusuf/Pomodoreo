import React, { useEffect, useState } from 'react';

function Timer() {
    const [workTime, setWorkTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);
    const [secondsLeft, setSecondsLeft] = useState(workTime * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [isWork, setIsWork] = useState(true);
    const [initialWorkTime, setInitialWorkTime] = useState(25);

    useEffect(() => {
        if (isWork) {
            setSecondsLeft(initialWorkTime * 60);
        }
    }, [initialWorkTime]);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setSecondsLeft((prev) => {
                    if (prev <= 0) {
                        if (isWork) {
                            alert('Work time is over! Starting break time.');
                            setIsWork(false);
                            return breakTime * 60;
                        } else {
                            alert('Break time is over! Timer stopped.');
                            setIsRunning(false); // Stop the timer after break time
                            return 0;
                        }
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning, isWork, initialWorkTime, breakTime]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleSetTimes = () => {
        setInitialWorkTime(workTime);
        setSecondsLeft(workTime * 60);
        setIsRunning(false);
        setIsWork(true);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{formatTime(secondsLeft)}</h1>
            <h1>{isWork ? "Work" : "Break"} - Time</h1>
            <button onClick={() => setIsRunning(true)} disabled={isRunning}>Start</button>
            <button onClick={() => setIsRunning(false)} disabled={!isRunning}>Stop</button>
            <button onClick={() => { 
                setIsRunning(false); 
                setSecondsLeft(initialWorkTime * 60); 
                setIsWork(true); 
            }}>
                Reset
            </button>
            <br></br>
            <input 
                type="number" 
                placeholder="Enter work time" 
                value={workTime} 
                onChange={(e) => setWorkTime(Number(e.target.value))} 
            />
            <input 
                type="number" 
                placeholder="Enter break time" 
                value={breakTime} 
                onChange={(e) => setBreakTime(Number(e.target.value))} 
            />
            <button onClick={handleSetTimes}>Set</button>
        </div>
    );
}

export default Timer;
