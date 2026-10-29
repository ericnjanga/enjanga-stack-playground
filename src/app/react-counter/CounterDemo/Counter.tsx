'use client';


import { useState, useEffect } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intID = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 500);

    return () => {
      clearInterval(intID);
    };
  }, []);

  return (
    <div className="text-center">
      <header className="text-6xl">{count}</header>
    </div>
  );
};

export default Counter;
