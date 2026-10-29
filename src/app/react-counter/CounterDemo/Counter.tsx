'use client';


import { useState } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <header className="text-6xl">{count}</header>
    </div>
  );
};

export default Counter;