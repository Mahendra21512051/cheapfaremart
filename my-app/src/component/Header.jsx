// src/features/counter/Counter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../ReduxToolkit/userSlice';

const Header = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment +1</button>
      <button onClick={() => dispatch(decrement())}>Decrement -1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Add +5</button>
    </div>
  );
};

export default Header;
