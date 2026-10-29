'use client';


import { useState, useEffect } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intID = setInterval(() => {
      setCount(count + 1);
      console.log(`count: ${count}`);
    }, 500);

    return () => {
      clearInterval(intID);
      console.log(`--> Destroying the interval: ${intID}`);
    };
  }, []);

  return (
    <div className="text-center">
      <header className="text-6xl">{count}</header>
    </div>
  );
};

export default Counter;
