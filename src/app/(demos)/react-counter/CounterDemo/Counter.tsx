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
    <div className="mx-auto max-w-md rounded-2xl border border-slate-700 bg-slate-900/60 px-5 py-10 text-center">
      <header className="text-6xl font-semibold tracking-tight tabular-nums">{count}</header>
      <section className="mt-8 flex flex-wrap justify-center gap-3">
        <button type="button" className="button-primary min-w-24" onClick={toggleRunning}>
          {`${isRunning ? `Pause` : (count > 0 ? `Resume` : `Start`)}`}
        </button>
        <button type="button" className="button-secondary min-w-24" onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default Counter;
