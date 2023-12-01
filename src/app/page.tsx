"use client";

import { useState } from 'react';
import { HackerCode } from "@/components/HackerCode";


const Home = () => {
    const [isRunning, setIsRunning] = useState(false);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    return (
        <div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            {isRunning && <HackerCode />}
        </div>
    );
};

export default Home;