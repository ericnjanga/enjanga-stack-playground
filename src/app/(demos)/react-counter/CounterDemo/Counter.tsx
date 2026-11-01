'use client';


import { useState, useEffect } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const intID = setInterval(() => {
      setCount(prevCount => prevCount + 1);
      console.log(`Count: ${count}`);
    }, 500);

    console.log(`Creating interval: ${intID}`);

    return () => {
      clearInterval(intID);
      console.log(`---> Destroying interval: ${intID}`);
    }
  }, [isRunning]);

  const reset = () => setCount(0);
  const toggleRunning = () => setIsRunning(val => !val);

  return (
    <div className="text-center">
      <header className="text-6xl">{count}</header>
      <section className="mt-4 flex justify-center gap-2.5">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleRunning}>
          {`${isRunning ? `Pause` : (count > 0 ? `Resume` : `Start`)}`}
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default Counter;
