import { useState } from 'react';

export default function Increment() {
  const [count, setCount] = useState(0);

  function incrementClick(): void {
    setCount(count + 1);
  }

  function decrementClick(): void {
    setCount(count - 1);
  }

  function resetClick(): void {
    setCount(0);
  }
  return (
    <div className='grid h-screen place-items-center '>
      <div className='inc-container'>
        <p className='col-start-2 row-start-1'>{count}</p>
        <button
          onClick={incrementClick}
          type='button'
          className='light-btn col-start-3 row-start-2 bg-palegreen'
        >
          Increment
        </button>
        <button
          onClick={resetClick}
          type='button'
          className='light-btn col-start-2 row-start-2 bg-palegoldenrod'
        >
          Reset
        </button>
        <button
          onClick={decrementClick}
          type='button'
          className='light-btn col-start-1 row-start-2 bg-palevioletred'
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
